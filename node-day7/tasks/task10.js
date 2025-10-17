const fs = require('fs').promises;

const files = ['file1.txt', 'file2.txt', 'file3.txt'];

async function readMultipleFiles() {
  try {
    console.log("⏳ Reading files...");


    const readPromises = files.map((file) => fs.readFile(file, 'utf8'));


    const contents = await Promise.all(readPromises);

    contents.forEach((data, index) => {
      console.log(`\n📄 ${files[index]} contents:`);
      console.log(data);
    });

    console.log("\n✅ All files read successfully!");
  } catch (err) {
    console.error("⚠️ Error reading files:", err.message);
  }
}

readMultipleFiles();
