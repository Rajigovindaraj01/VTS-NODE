const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/message',(req,res) => {
    const {message} = req.body;
    if(!message){
        return res.status(400).json({error:"Message is required"});
    }
    res.json({
        status:"success",
        receivedMessage:message,
        message:"Your message has been receiveed"
    })
})

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
})