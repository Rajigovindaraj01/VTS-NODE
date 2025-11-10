const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h2>Upload a file</h2>
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <input type="file" name="myFile" />
      <button type="submit">Upload</button>
    </form>
  `);
});

app.post('/upload', (req, res) => {
  const filePath = path.join(__dirname, 'uploaded_file');
  const writeStream = fs.createWriteStream(filePath);

  req.pipe(writeStream);

  req.on('end', () => {
    res.send('✅ File uploaded successfully!');
  });

  req.on('error', (err) => {
    console.error('❌ Upload error:', err.message);
    res.status(500).send('Upload failed!');
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
