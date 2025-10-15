const http = require('http');

const server = http.createServer((req,res)=>{
    res.write("Hello from Nodejs Backend!");
    res.end();
})

server.listen(3000,()=>{
    console.log("server running on http://localhost:3000")
})

