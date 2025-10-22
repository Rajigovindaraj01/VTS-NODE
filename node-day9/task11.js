const fs = require('fs');

// 1. Read a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Read Error:", err.message);
        return;
    }
    console.log("File content:", data);
});

// 2. Write a file asynchronously
fs.writeFile('output.txt', 'Hello, Node.js!', 'utf8', (err) => {
    if (err) {
        console.error("Write Error:", err.message);
        return;
    }
    console.log("File written successfully!");
});

// 3. Append to a file asynchronously
fs.appendFile('output.txt', '\nAppended text', 'utf8', (err) => {
    if (err) {
        console.error("Append Error:", err.message);
        return;
    }
    console.log("Text appended successfully!");
});

// 4. Delete a file asynchronously
fs.unlink('output.txt', (err) => {
    if (err) {
        console.error("Delete Error:", err.message);
        return;
    }
    console.log("File deleted successfully!");
});

// 5. Create a directory asynchronously
fs.mkdir('new_directory', { recursive: true }, (err) => {
    if (err) {
        console.error("Directory Creation Error:", err.message);
        return;
    }
    console.log("Directory created successfully!");
});

// 6. Read directory contents asynchronously
fs.readdir('new_directory', (err, files) => {
    if (err) {
        console.error("Read Directory Error:", err.message);
        return;
    }
    console.log("Directory contents:", files);
});

// 7. Read and parse a JSON file asynchronously
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error("JSON Read Error:", err.message);
        return;
    }

    if (!data) {
        console.error("JSON file is empty!");
        return;
    }

    try {
        const parsedData = JSON.parse(data);
        console.log("Parsed JSON:", parsedData);
    } catch (parseErr) {
        console.error("JSON Parse Error:", parseErr.message);
    }
});
