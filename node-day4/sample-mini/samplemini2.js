const fs = require('fs');
const path = require('path');
const events = require('events');

const eventEmitter = new events.EventEmitter();

// Folder to organize
const folderPath = path.join(__dirname, 'files');

// Extension mapping
const folderMapping = {
  txt: 'txt',
  js: 'js',
  jpg: 'image',
  jpeg: 'image',
  png: 'image',
  gif: 'image'
};

// Event listener
eventEmitter.on('organized', (file, folder) => {
  console.log(`Moved "${file}" to "${folder}" folder`);
});

// Read all files in files folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(folderPath, file);

    // Skip directories
    if (fs.lstatSync(filePath).isDirectory()) return;

    const ext = path.extname(file).slice(1).toLowerCase();
    if (!ext) return;

    const targetFolderName = folderMapping[ext] || 'others';
    const targetPath = path.join(folderPath, targetFolderName, file);

    // Move file
    fs.rename(filePath, targetPath, (err) => {
      if (err) {
        console.error('Error moving file:', err);
      } else {
        eventEmitter.emit('organized', file, targetFolderName);
      }
    });
  });
});
