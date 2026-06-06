import { createReadStream } from 'node:fs';
import { access, stat } from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';

const ROOT_DIR = process.argv[2] ? path.resolve(process.cwd(), process.argv[2]) : path.resolve(process.cwd(), 'site');
const SHOULD_REDIRECT_UNKNOWN_ROUTES = path.basename(ROOT_DIR).toLowerCase() === 'site';
const PORT = Number(process.env.PORT || 3000);

const MIME_TYPES = {
  '.avif': 'image/avif',
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.mp4': 'video/mp4',
  '.otf': 'font/otf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.ttf': 'font/ttf',
  '.webm': 'video/webm',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
};

async function resolveFile(requestPath) {
  const decodedPath = decodeURIComponent(requestPath);
  const normalizedPath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, '');
  const basePath = path.join(ROOT_DIR, normalizedPath);

  try {
    const fileStat = await stat(basePath);

    if (fileStat.isDirectory()) {
      return path.join(basePath, 'index.html');
    }

    return basePath;
  } catch {
    if (!path.extname(basePath)) {
      return path.join(basePath, 'index.html');
    }

    return basePath;
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host}`);
  const candidatePath = await resolveFile(url.pathname);

  try {
    await access(candidatePath);
    const extension = path.extname(candidatePath).toLowerCase();
    const contentType = MIME_TYPES[extension] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    createReadStream(candidatePath).pipe(res);
    return;
  } catch {
    if (SHOULD_REDIRECT_UNKNOWN_ROUTES && !path.extname(url.pathname)) {
      res.writeHead(302, {
        Location: `https://www.doss.com${url.pathname}${url.search}`,
      });
      res.end();
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`Serving ${ROOT_DIR} on http://127.0.0.1:${PORT}`);
});
