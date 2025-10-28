const express = require('express');
const app = express();
const PORT = 3001;
const API_KEY = '123456789';


function authMiddleware(req,res,next){
    const apiKey = req.header('x-api-key');
    if(apiKey !== API_KEY){
        return res.status(401).json({error:'Unauthorized'});
    }
    next();
}

app.use(authMiddleware);

app.get('/secure-data',(req,res)=>{
    res.json({data:'This is protected data.'})
})

app.listen(PORT,()=>{
    console.log(`server running on port http://localhost:${PORT}`)
})