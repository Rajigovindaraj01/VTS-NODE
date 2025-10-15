const fs = require('fs');

const now = new Date().toLocaleString();

const logMessage = `Log entry at ${now}: File appended successfully!\n`;

fs.appendFile('log.txt',logMessage,(err)=>{
    if(err){
        console.error('Error appending to file:',err)
    }
    else{
        console.log('Log appended successfully');
    }
})