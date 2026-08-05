import express from 'express';

const app = express()
app.use(express.urlencoded())
app.post('/register', (req, res) => {
    console.log(req.body);
    const {name , email, role} = req.body
    if (!name || ! email) {
        res.status(400).json("something missing")
    }
    res.status(201).json({message : "your submitted" , user :{ name , email, role}})
})

app.listen(3000,()=>{
    console.log("server running...");
    
})