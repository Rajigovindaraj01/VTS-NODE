const fs = require('fs');
const path = require('path');
const os = require('os');

// Folder path to scan (you can change this)
const folderPath = path.join(__dirname, 'files'); // Replace 'files' with your folder

// Function to format bytes into KB/MB for readability
function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
  else return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

// Read all files in the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  console.log(`\nFiles in "${folderPath}":\n`);

  files.forEach(file => {
    const filePath = path.join(folderPath, file);

    // Skip directories
    if (fs.lstatSync(filePath).isDirectory()) return;

    const stats = fs.statSync(filePath);
    const ext = path.extname(file).slice(1);
    const size = formatBytes(stats.size);
    const createdAt = stats.birthtime.toLocaleString();

    console.log(`File: ${file}`);
    console.log(`  Size: ${size}`);
    console.log(`  Extension: ${ext || 'N/A'}`);
    console.log(`  Created At: ${createdAt}\n`);
  });
});
