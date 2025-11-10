const EventEmitter = require('events');

class FileDownloader extends EventEmitter {
  downloadFile(filename) {
    console.log(`⬇️ Starting download for: ${filename}...`);
    setTimeout(() => {
      console.log(`✅ ${filename} downloaded successfully.`);
      
      this.emit('downloadComplete', filename);
    }, 2000); 
  }
}


const downloader = new FileDownloader();


downloader.on('downloadComplete', (filename) => {
  console.log(`📁 Event received: Processing the downloaded file "${filename}"`);
});


downloader.downloadFile('portfolio_template.zip');
