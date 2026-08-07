const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  if (!fs.existsSync('WEBSITE.zip')) {
    fs.copyFileSync('WEBSITE.docx', 'WEBSITE.zip');
  }
  // unzip using powershell Expand-Archive
  execSync('powershell -Command "Expand-Archive -Path \'WEBSITE.zip\' -DestinationPath \'docx_out\' -Force"');
  const xmlStr = fs.readFileSync(path.join('docx_out', 'word', 'document.xml'), 'utf8');
  // strip XML tags
  const paragraphs = xmlStr.split(/<\/w:p>/);
  const textLines = [];
  for (let p of paragraphs) {
    const matches = p.match(/<w:t[^>]*>(.*?)<\/w:t>/g);
    if (matches) {
      const line = matches.map(m => m.replace(/<[^>]+>/g, '')).join('');
      if (line.trim()) textLines.push(line.trim());
    }
  }
  fs.writeFileSync('client_document_text.txt', textLines.join('\n\n'), 'utf8');
  console.log('Successfully extracted', textLines.length, 'paragraphs.');
  console.log('First 10 lines:\n', textLines.slice(0, 10).join('\n'));
} catch (err) {
  console.error(err);
}
