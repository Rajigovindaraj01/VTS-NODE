const express = require('express');
const app = express();
const PORT = 3000;

app.use((req,res,next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
})

app.get('/',(req,res)=>{
    res.send("Hello Middleware");
})

app.listen(PORT,()=>{
    console.log(`Server running on port  http://localhost:${PORT}`)
})