const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'Photos', 'Background image');
const destDir = path.join(__dirname, '..', 'public', 'images', 'background');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(srcDir)) {
  const files = fs.readdirSync(srcDir);
  let copiedCount = 0;
  for (const file of files) {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    if (fs.statSync(srcFile).isFile()) {
      fs.copyFileSync(srcFile, destFile);
      copiedCount++;
    }
  }
  console.log(`[Sync-BG] Successfully synced ${copiedCount} background images to public/images/background/`);
} else {
  console.log(`[Sync-BG] Source folder not found: ${srcDir}`);
}
