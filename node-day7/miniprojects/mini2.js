const fs = require('fs').promises;

const inputFile = 'input.txt';
const outputFile = 'output.txt';

async function modifyFile() {
  try {
    console.log(`⏳ Reading ${inputFile}...`);

    const data = await fs.readFile(inputFile, 'utf8');
    console.log("✅ Original content:");
    console.log(data);

    const modifiedData = `${data}\n\nModified at: ${new Date().toLocaleString()}`;

    await fs.writeFile(outputFile, modifiedData);
    console.log(`✅ Modified content written to ${outputFile}`);
  } catch (err) {
    console.error("⚠️ Error during file operations:", err.message);
  }
}

modifyFile();
