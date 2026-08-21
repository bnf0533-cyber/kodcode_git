import express from 'express';
import 'dotenv/config';
import { createConnect } from './db/config.db.js';
import router from './routes/game.route.js';



const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use("/",router)

createConnect().then(() => {
    app.listen(PORT,()=>{
        console.log("server running on a secret port...");
    })
})