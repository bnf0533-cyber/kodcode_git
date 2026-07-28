import dotenv from "dotenv/config"
import express from "express"
import "./db/dbConfigMongo.db.js"
import "./db/dbConfigSupabase.db.js"

const app = express()
app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log("server running very well...");
})