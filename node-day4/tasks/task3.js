const fs = require('fs');

fs.readFile('log.txt','utf8',(err,data)=>{
    if(err){
        console.error('Error reading file:',err);
    }
    else{
        console.log('content of log.txt: \n')
        console.log(data);
    }
})