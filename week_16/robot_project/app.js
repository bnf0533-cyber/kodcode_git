import dotenv from "dotenv/config"
import express from "express"
import "./db/dbConfigMongo.db.js"
import "./db/dbConfigSupabase.db.js"
import studentRouter from "./routes/student.route.js"


const app = express()
app.use(express.json())
app.use("/users",studentRouter)

app.listen(process.env.PORT, () => {
    console.log("server running very well...");
})