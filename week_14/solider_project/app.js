import express from "express"
import { createTable } from "./db/db_soldier.js"
import soldierRouter from "./routes/router.js"
const app = express()

createTable()
app.use(express.json())
app.use("/soldiers" , soldierRouter)

app.use("/" , (req , res, next) => {
    res.end("welcome to the solider manager.")
    next()
})

app.listen(3000 , () => {
    console.log("server solider running...");
})