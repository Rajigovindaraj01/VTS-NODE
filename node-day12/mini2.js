const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/register',(req,res)=>{
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(400).send('Username and password are required');
    }
    res.send(`User "${username}" registered successfully`);
})

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})