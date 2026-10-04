// Minimal static file server for the built dist/ folder (no child processes).
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname.replace(/^\//, '');
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

createServer(async (req, res) => {
  try {
    let url = req.url.split('?')[0];
    const flatview = req.url.includes('flatview');
    if (url.endsWith('/')) url += 'index.html';
    let filePath = normalize(join(root, url));
    if (!filePath.startsWith(normalize(root))) throw new Error('forbidden');
    let data;
    try {
      data = await readFile(filePath);
    } catch {
      // Directory-index fallback: /about -> /about/index.html
      if (!extname(url)) {
        try {
          filePath = normalize(join(root, url, 'index.html'));
          if (!filePath.startsWith(normalize(root))) throw new Error('forbidden');
          data = await readFile(filePath);
        } catch {
          filePath = join(root, '404.html');
          try { data = await readFile(filePath); } catch { data = Buffer.from('Not found'); filePath = ''; }
        }
      } else {
        filePath = join(root, '404.html');
        try { data = await readFile(filePath); } catch { data = Buffer.from('Not found'); filePath = ''; }
      }
    }
    const type = mime[extname(filePath).toLowerCase()] ?? 'application/octet-stream';
    if (flatview && type.startsWith('text/html')) {
      // Verification-only override: neutralize viewport-relative section heights
      // so full-page captures show the natural stacked layout.
      const inject = '<style>.hero,.notfound{min-height:0!important}.hero{padding-top:150px!important;padding-bottom:140px!important}.contact{min-height:0!important}</style>';
      const report = `<script>window.addEventListener('load',function(){setTimeout(function(){var out=[];document.querySelectorAll('main > section, main > div > section, footer').forEach(function(el){var r=el.getBoundingClientRect();out.push(el.tagName+'.'+(el.className||'').split(' ')[0]+' top='+Math.round(r.top+window.scrollY)+' h='+Math.round(r.height))});var d=document.createElement('div');d.id='layout-report';d.textContent='REPORT:'+out.join(' | ');document.body.appendChild(d)},1200)})</script>`;
      data = Buffer.from(data.toString().replace('</head>', inject + report + '</head>'));
    }
    res.writeHead(200, { 'content-type': type });
    res.end(data);
  } catch {
    res.writeHead(500);
    res.end('error');
  }
}).listen(4317, '127.0.0.1', () => console.log('serving dist on http://127.0.0.1:4317'));
