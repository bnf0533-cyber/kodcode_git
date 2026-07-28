import dotenv from "dotenv/config"
import express from "express"
import "./db/dbConfig.js"
const app = express()
app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log("server running very well...");
})