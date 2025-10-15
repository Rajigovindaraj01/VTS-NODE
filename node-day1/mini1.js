const http = require('http');
const { json } = require('stream/consumers');
const url = require ('url');

const qoutes = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { text: "If you are working on something exciting, it will keep you motivated.", author: "Unknown" }
]

const server = http.createServer((req,res)=>{
    const reqUrl = url.parse(req.url,true);
    if(reqUrl.pathname === '/quote'){
        let filteringquo=qoutes;
        if(reqUrl.query.author){
            const authorquery = reqUrl.query.author.toLowerCase();
            filteringquo= qoutes.filter(q=>q.author.toLowerCase().includes(authorquery));
        }

        const randomss = Math.floor(Math.random()*filteringquo.length);
        const randomQuo = filteringquo[randomss];

        if(randomQuo){
            res.writeHead(200,{'content-type':'application/json'});
            res.end(JSON.stringify(randomQuo));
            
        } else{
            res.writeHead(404,{'content-type':'application/json'});
            res.end(JSON.stringify({message:"no qoutes"}))
        }
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.end("Not Found");
    }
})

server.listen(3003,()=>{
    console.log("server running on http://localhost:3003")
})