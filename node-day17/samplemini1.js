const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    {id:1,name:'raji'},
    {id:2,name:'sandy'},
    {id:3,name:'preethu'}
]

app.get('/users',(req,res)=>{
    res.json(users);
})

app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id=users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
})

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})