import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SITE_ORIGIN = 'https://www.doss.com';
const ROOT_URL = new URL('/', SITE_ORIGIN);
const OUT_DIR = path.resolve(process.cwd(), 'site');
const REFERENCE_INDEX_PATH = path.resolve(process.cwd(), 'public', 'reference', 'index.html');
const REWRITE_LOCAL_ONLY = process.argv.includes('--rewrite-local');
const HYDRATE_EXISTING_ONLY = process.argv.includes('--hydrate-existing');
const MAX_PAGE_DEPTH = 2;
const MAX_PAGE_COUNT = 140;
const MAX_HYDRATION_PASSES = 6;
const MAX_HYDRATION_PAGES_PER_PASS = 120;

const TEXT_EXTENSIONS = new Set([
  '.css',
  '.html',
  '.js',
  '.json',
  '.mjs',
  '.svg',
  '.txt',
  '.webmanifest',
  '.xml',
]);

const ASSET_EXTENSIONS = new Set([
  '.avif',
  '.gif',
  '.ico',
  '.jpeg',
  '.jpg',
  '.css',
  '.js',
  '.json',
  '.mjs',
  '.mp4',
  '.png',
  '.svg',
  '.ttf',
  '.otf',
  '.webm',
  '.webmanifest',
  '.webp',
  '.woff',
  '.woff2',
]);

const seen = new Set();
const queued = new Set();
const queue = [];
let mirroredPageCount = 0;

function ensureDotRelative(relativePath) {
  if (
    relativePath.startsWith('./') ||
    relativePath.startsWith('../')
  ) {
    return relativePath;
  }

  return `./${relativePath}`;
}

function isSameSite(url) {
  return url.hostname === 'www.doss.com' || url.hostname === 'doss.com';
}

function isAssetUrl(url) {
  if (!isSameSite(url)) {
    return false;
  }

  const lowerPath = url.pathname.toLowerCase();
  const extension = path.extname(lowerPath);

  if (ASSET_EXTENSIONS.has(extension)) {
    return true;
  }

  return (
    !lowerPath.endsWith('/') &&
    (
      lowerPath.startsWith('/animations/') ||
      lowerPath.startsWith('/assets/') ||
      lowerPath.startsWith('/css/') ||
      lowerPath.startsWith('/images/') ||
      lowerPath.startsWith('/js/')
    )
  );
}

function isPageUrl(url) {
  if (!isSameSite(url)) {
    return false;
  }

  if (isAssetUrl(url)) {
    return false;
  }

  const extension = path.extname(url.pathname.toLowerCase());

  return extension === '' || extension === '.html';
}

function normalizeQueuedUrl(input, kind) {
  const url = new URL(input);
  url.hash = '';

  if (kind === 'page') {
    url.search = '';

    if (
      url.pathname !== '/' &&
      path.extname(url.pathname.toLowerCase()) === '' &&
      !url.pathname.endsWith('/')
    ) {
      url.pathname = `${url.pathname}/`;
    }
  }

  return url.href;
}

function queueUrl(input, kind, depth = 0) {
  const normalizedHref = normalizeQueuedUrl(input, kind);

  if (queued.has(normalizedHref)) {
    return;
  }

  queued.add(normalizedHref);
  queue.push({ href: normalizedHref, kind, depth });
}

function isTextual(url, contentType) {
  const normalized = contentType.toLowerCase();

  if (
    normalized.includes('javascript') ||
    normalized.includes('json') ||
    normalized.includes('svg') ||
    normalized.includes('text/') ||
    normalized.includes('webmanifest') ||
    normalized.includes('xml')
  ) {
    return true;
  }

  return TEXT_EXTENSIONS.has(path.extname(url.pathname.toLowerCase()));
}

function toOutputPath(url) {
  let pathname = decodeURIComponent(url.pathname);

  if (!pathname || pathname === '/') {
    pathname = '/index.html';
  } else if (pathname.endsWith('/')) {
    pathname = `${pathname}index.html`;
  } else if (!path.extname(pathname)) {
    pathname = `${pathname}/index.html`;
  }

  return path.join(OUT_DIR, pathname.replace(/^\/+/, ''));
}

function expandCandidate(raw) {
  if (raw.includes(',') && /\s(?:\d+w|\d+x)\b/.test(raw)) {
    return raw
      .split(',')
      .map((part) => part.trim().split(/\s+/)[0])
      .filter(Boolean);
  }

  return [raw];
}

function addAssetReference(found, rawValue, baseUrl) {
  const normalizedCandidate = rawValue.replace(/#.*$/, '');

  if (
    !normalizedCandidate ||
    !normalizedCandidate.startsWith('/') &&
    !normalizedCandidate.startsWith('./') &&
    !normalizedCandidate.startsWith('../') &&
    !normalizedCandidate.startsWith('http://') &&
    !normalizedCandidate.startsWith('https://') &&
    !normalizedCandidate.startsWith('//')
  ) {
    return;
  }

  try {
    const resolved = new URL(normalizedCandidate, baseUrl);

    if (isAssetUrl(resolved)) {
      found.set(`${normalizedCandidate}::${resolved.href}`, {
        raw: normalizedCandidate,
        href: resolved.href,
      });
    }
  } catch {
    // Ignore text that is not a valid URL or path.
  }
}

function extractAssetReferences(text, baseUrl) {
  const found = new Map();
  const attributePattern =
    /(?:src|href|data-src|data-srcset|data-lottie-path)\s*=\s*["']([^"']+)["']/g;
  const candidatePattern =
    /url\(\s*['"]?([^"'`)]+)['"]?\s*\)|["'`]([^"'`\r\n]+)["'`]/g;

  for (const match of text.matchAll(attributePattern)) {
    const rawValue = (match[1] ?? '').trim().replace(/\\\//g, '/');

    if (!rawValue) {
      continue;
    }

    for (const candidate of expandCandidate(rawValue)) {
      addAssetReference(found, candidate, baseUrl);
    }
  }

  for (const match of text.matchAll(candidatePattern)) {
    const rawValue = (match[1] ?? match[2] ?? '').trim().replace(/\\\//g, '/');

    if (
      !rawValue ||
      rawValue.startsWith('#') ||
      rawValue.startsWith('data:') ||
      rawValue.startsWith('javascript:') ||
      rawValue.startsWith('mailto:') ||
      rawValue.startsWith('tel:')
    ) {
      continue;
    }

    for (const candidate of expandCandidate(rawValue)) {
      addAssetReference(found, candidate, baseUrl);
    }
  }

  return [...found.values()];
}

function extractPageReferences(text, baseUrl) {
  const found = new Set();
  const hrefPattern = /href\s*=\s*["']([^"']+)["']/g;

  for (const match of text.matchAll(hrefPattern)) {
    const rawValue = (match[1] ?? '').trim();

    if (
      !rawValue ||
      rawValue.startsWith('#') ||
      rawValue.startsWith('data:') ||
      rawValue.startsWith('javascript:') ||
      rawValue.startsWith('mailto:') ||
      rawValue.startsWith('tel:')
    ) {
      continue;
    }

    try {
      const resolved = new URL(rawValue, baseUrl);

      if (isPageUrl(resolved)) {
        found.add(normalizeQueuedUrl(resolved, 'page'));
      }
    } catch {
      // Ignore invalid URLs.
    }
  }

  return [...found];
}

function relativizeTextContent(text, outPath, assetReferences) {
  let rewritten = text;

  for (const reference of [...assetReferences].sort((a, b) => b.raw.length - a.raw.length)) {
    const asset = new URL(reference.href);

    if (asset.pathname === '/') {
      continue;
    }

    const targetOutPath = toOutputPath(asset);
    const relativePath = ensureDotRelative(
      path.relative(path.dirname(outPath), targetOutPath).replaceAll('\\', '/')
    );
    rewritten = rewritten.split(reference.raw).join(relativePath);
  }

  return rewritten;
}

function toSiteUrl(filePath) {
  const relativePath = path.relative(OUT_DIR, filePath).replaceAll('\\', '/');

  if (relativePath === 'index.html') {
    return new URL('/', ROOT_URL);
  }

  if (relativePath.endsWith('/index.html')) {
    return new URL(`${relativePath.slice(0, -'index.html'.length)}`, ROOT_URL);
  }

  return new URL(relativePath, ROOT_URL);
}

async function* walkFiles(directoryPath) {
  const entries = await readdir(directoryPath, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      yield* walkFiles(entryPath);
      continue;
    }

    yield entryPath;
  }
}

async function pathExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectMissingReferences(kind) {
  const missing = new Set();
  const existenceCache = new Map();

  try {
    await stat(OUT_DIR);
  } catch {
    return [];
  }

  for await (const filePath of walkFiles(OUT_DIR)) {
    const extension = path.extname(filePath).toLowerCase();

    if (!TEXT_EXTENSIONS.has(extension)) {
      continue;
    }

    const source = await readFile(filePath, 'utf8');
    const baseUrl = toSiteUrl(filePath);
    const references = kind === 'page'
      ? extractPageReferences(source, baseUrl)
      : extractAssetReferences(source, baseUrl).map((reference) => normalizeQueuedUrl(reference.href, 'asset'));

    for (const href of references) {
      const localPath = toOutputPath(new URL(href));

      if (!existenceCache.has(localPath)) {
        existenceCache.set(localPath, await pathExists(localPath));
      }

      if (!existenceCache.get(localPath)) {
        missing.add(href);
      }
    }
  }

  return [...missing];
}

async function hydrateExistingMirror() {
  let hydratedPages = 0;
  let hydratedAssets = 0;

  for (let pass = 0; pass < MAX_HYDRATION_PASSES; pass += 1) {
    const missingPages = (await collectMissingReferences('page')).slice(0, MAX_HYDRATION_PAGES_PER_PASS);

    for (const pageUrl of missingPages) {
      console.log(`Hydrating missing page ${pageUrl}`);
      await mirrorUrl(pageUrl);
      hydratedPages += 1;
    }

    const missingAssets = await collectMissingReferences('asset');

    for (const assetUrl of missingAssets) {
      console.log(`Hydrating missing asset ${assetUrl}`);
      await mirrorUrl(assetUrl);
      hydratedAssets += 1;
    }

    if (missingPages.length === 0 && missingAssets.length === 0) {
      break;
    }
  }

  return { hydratedPages, hydratedAssets };
}

async function rewriteMirroredFiles() {
  try {
    await stat(OUT_DIR);
  } catch {
    console.warn(`Skipping local rewrite because ${OUT_DIR} does not exist yet.`);
    return;
  }

  for await (const filePath of walkFiles(OUT_DIR)) {
    const extension = path.extname(filePath).toLowerCase();

    if (!TEXT_EXTENSIONS.has(extension)) {
      continue;
    }

    const source = await readFile(filePath, 'utf8');
    const baseUrl = toSiteUrl(filePath);
    const references = extractAssetReferences(source, baseUrl);
    const rewritten = relativizeTextContent(source, filePath, references);

    if (rewritten !== source) {
      await writeFile(filePath, rewritten, 'utf8');
    }
  }
}

async function syncReferenceIndex() {
  const siteIndexPath = path.join(OUT_DIR, 'index.html');

  try {
    await mkdir(path.dirname(REFERENCE_INDEX_PATH), { recursive: true });
    const source = await readFile(siteIndexPath, 'utf8');
    await writeFile(REFERENCE_INDEX_PATH, source, 'utf8');
  } catch {
    console.warn(`Skipping reference sync because ${siteIndexPath} is not available.`);
  }
}

async function mirrorUrl(urlString) {
  const url = new URL(urlString);
  let response;

  try {
    response = await fetch(url, {
      redirect: 'follow',
      headers: {
        'user-agent': 'Mozilla/5.0 (compatible; Codex mirror bot)',
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`Skipping ${url.href}: ${message}`);
    return {
      ok: false,
      assets: [],
      pages: [],
    };
  }

  if (!response.ok) {
    console.warn(`Skipping ${url.href}: ${response.status} ${response.statusText}`);
    return {
      ok: false,
      assets: [],
      pages: [],
    };
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  const outPath = toOutputPath(url);
  const contentType = response.headers.get('content-type') ?? '';

  await mkdir(path.dirname(outPath), { recursive: true });

  if (!isTextual(url, contentType)) {
    await writeFile(outPath, buffer);
    return {
      ok: true,
      assets: [],
      pages: [],
    };
  }

  const text = buffer.toString('utf8');
  const references = extractAssetReferences(text, url);
  const pages = extractPageReferences(text, url);
  const rewritten = relativizeTextContent(text, outPath, references);

  await writeFile(outPath, rewritten, 'utf8');

  return {
    ok: true,
    assets: [...new Set(references.map((reference) => normalizeQueuedUrl(reference.href, 'asset')))],
    pages,
  };
}

if (!REWRITE_LOCAL_ONLY && !HYDRATE_EXISTING_ONLY) {
  queueUrl(ROOT_URL, 'page', 0);

  while (queue.length > 0) {
    const current = queue.shift();

    if (!current || seen.has(current.href)) {
      continue;
    }

    seen.add(current.href);
    console.log(`Mirroring ${current.href}`);

    if (current.kind === 'page') {
      mirroredPageCount += 1;
    }

    const discovered = await mirrorUrl(current.href);

    for (const assetUrl of discovered.assets) {
      queueUrl(assetUrl, 'asset', current.depth);
    }

    if (current.kind !== 'page' || current.depth >= MAX_PAGE_DEPTH || mirroredPageCount >= MAX_PAGE_COUNT) {
      continue;
    }

    for (const pageUrl of discovered.pages) {
      if (mirroredPageCount >= MAX_PAGE_COUNT) {
        break;
      }

      queueUrl(pageUrl, 'page', current.depth + 1);
    }
  }

  console.log(`Done. Mirrored ${seen.size} files into ${OUT_DIR}`);
} else if (HYDRATE_EXISTING_ONLY) {
  console.log(`Hydrating existing mirror in ${OUT_DIR}`);
} else {
  console.log(`Rewriting existing mirror in ${OUT_DIR}`);
}

if (!REWRITE_LOCAL_ONLY) {
  const { hydratedPages, hydratedAssets } = await hydrateExistingMirror();
  console.log(`Hydrated ${hydratedPages} pages and ${hydratedAssets} assets from local references.`);
}

await rewriteMirroredFiles();
await syncReferenceIndex();
console.log(`Local mirror files are now normalized for direct file previews.`);
