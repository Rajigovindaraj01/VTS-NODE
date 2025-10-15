const fs = require('fs');

const content = 'This is a content';

fs.writeFile('log.text-task1',content,(err)=>{
    if(err){
        console.error('Error writing file:',err);
    }
    else{
        console.log('log.txt has been created successfullly');
    }
})