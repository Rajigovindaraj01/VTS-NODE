const http = require('http');
 const jokes=[
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Debugging : Being the detective in  a crime movie where you are also the murderer."
 ]

const server = http.createServer((req,res)=>{
    if(req.url === '/joke'){
        const random = Math.floor(Math.random()*jokes.length);
        res.writeHead(200,{'content-type':'application/json'});
        res.end(JSON.stringify({joke:jokes[random]}));
    }
    else{
        res.writeHead(404);
        res.end("not found");
    }
}) 

server.listen(3002,()=>{
    console.log("server running at http://localhost:3002")
})