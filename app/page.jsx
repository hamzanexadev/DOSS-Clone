import { readFileSync } from 'node:fs';
import path from 'node:path';

function getMirrorHtml() {
  const filePath = path.join(process.cwd(), 'site', 'index.html');
  let html = readFileSync(filePath, 'utf8');

  html = html
    .replace(
      '<head>',
      '<head><base href="/" /><style>#home-announcement-modal{display:none !important;visibility:hidden !important;opacity:0 !important;pointer-events:none !important;}</style><script>try{window.sessionStorage.setItem("home-announcement-seen","1")}catch(e){}</script>'
    )
    .replace(/<script>[\s\S]*?googletagmanager[\s\S]*?<\/script>/i, '')
    .replace(/<noscript><iframe[\s\S]*?<\/iframe><\/noscript>/i, '')
    .replace('class="header dropdown-open promo-banner-active"', 'class="header promo-banner-active"');

  return html;
}

export default function Page() {
  const mirrorHtml = getMirrorHtml();

  return (
    <main className="mirror-page">
      <iframe
        className="mirror-frame"
        title="DOSS mirror"
        srcDoc={mirrorHtml}
      />
    </main>
  );
}
