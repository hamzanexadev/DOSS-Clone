import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SITE_DIR = path.resolve(process.cwd(), process.argv[2] || 'site');
const FIX_ID = 'doss-static-mirror-fix';
const FIX_SNIPPET = `<style id="${FIX_ID}-style">#home-announcement-modal{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important}</style><script id="${FIX_ID}-script">try{window.sessionStorage.setItem("home-announcement-seen","1")}catch(e){}</script>`;

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

function normalizeHtml(source) {
  let html = source.replace(/\bdropdown-open\b/g, '').replace(/class="([^"]*?)\s+"/g, 'class="$1"');

  if (!html.includes(`${FIX_ID}-style`) && html.includes('</head>')) {
    html = html.replace('</head>', `${FIX_SNIPPET}</head>`);
  }

  return html;
}

try {
  await stat(SITE_DIR);
} catch {
  console.error(`Static mirror directory does not exist: ${SITE_DIR}`);
  process.exitCode = 1;
}

let changedCount = 0;
let checkedCount = 0;

if (!process.exitCode) {
  for await (const filePath of walkFiles(SITE_DIR)) {
    if (path.extname(filePath).toLowerCase() !== '.html') {
      continue;
    }

    checkedCount += 1;
    const source = await readFile(filePath, 'utf8');
    const normalized = normalizeHtml(source);

    if (normalized !== source) {
      await writeFile(filePath, normalized, 'utf8');
      changedCount += 1;
    }
  }

  console.log(`Normalized ${changedCount} of ${checkedCount} mirrored HTML files in ${SITE_DIR}`);
}
