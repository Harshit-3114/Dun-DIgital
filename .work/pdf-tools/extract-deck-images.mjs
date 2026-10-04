// Extract embedded images from the Dun Digital deck PDF, tagged by page number.
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const pdfPath = process.argv[2] ?? String.raw`C:\Users\harsh\.dsh\attachments\v1\files\69\693ac54fe8d9f3d4979fbb0673fc590d6b868152845f82e9d63d4066dca75b30\Dun_Digital_Corporate_Deck_V1.pdf`;
const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'deck-images');
mkdirSync(outDir, { recursive: true });

const doc = await getDocument({ url: 'file:///' + pdfPath.replace(/\\/g, '/'), isEvalSupported: false, useSystemFonts: true }).promise;
let counter = 0;
for (let pageNo = 1; pageNo <= doc.numPages; pageNo++) {
  const page = await doc.getPage(pageNo);
  const ops = await page.getOperatorList();
  const names = page.objs?.getKeys?.() ?? [];
  // Common image XObject name pattern in pdf.js operator list: dependencies hold image objects.
  const imgArgs = [];
  for (let i = 0; i < ops.fnArray.length; i++) {
    if (ops.fnArray[i] === 85 /* OPS.paintImageXObject */) imgArgs.push(ops.argsArray[i][0]);
    if (ops.fnArray[i] === 86 /* paintInlineImageXObject */) imgArgs.push(ops.argsArray[i][0]);
  }
  for (const name of imgArgs) {
    try {
      const img = await new Promise((resolve, reject) => {
        const tryGet = (attempt) => {
          if (page.objs.has(name)) {
            try { page.objs.get(name, resolve); } catch (e) { reject(e); }
          } else if (attempt < 50) setTimeout(() => tryGet(attempt + 1), 100);
          else reject(new Error('not found: ' + name));
        };
        tryGet(0);
      });
      if (!img || !img.width || !img.height || img.width < 100) continue;
      const { width, height, data, kind } = img;
      // kind: 1 GRAYSCALE_1BPP, 2 RGB_24BPP, 3 RGBA_32BPP
      let channels = kind === 2 ? 3 : kind === 3 ? 4 : kind === 4 ? 3 : 1;
      let buffer;
      if (data instanceof Uint8ClampedArray || data instanceof Uint8Array) {
        buffer = Buffer.from(data.buffer ?? data);
      } else { continue; }
      const out = Buffer.alloc(width * height * 3);
      if (channels === 3) { buffer.copy(out, 0, 0, width * height * 3); }
      else if (channels === 4) { for (let p = 0; p < width * height; p++) { out[p*3]=buffer[p*4]; out[p*3+1]=buffer[p*4+1]; out[p*3+2]=buffer[p*4+2]; } }
      else { for (let p = 0; p < width * height; p++) { const v = buffer[p]; out[p*3]=v; out[p*3+1]=v; out[p*3+2]=v; } }
      // Write as PPM (trivial), then we can convert to PNG via System.Drawing later if needed.
      counter++;
      const file = path.join(outDir, `page${String(pageNo).padStart(2,'0')}-${counter}.ppm`);
      const header = Buffer.from(`P6\n${width} ${height}\n255\n`);
      writeFileSync(file, Buffer.concat([header, out]));
      console.log(`page ${pageNo}: ${name} ${width}x${height} kind=${kind} -> ${file}`);
    } catch (e) {
      console.log(`page ${pageNo}: skip ${name}: ${e.message}`);
    }
  }
}
console.log('done, images:', counter);
