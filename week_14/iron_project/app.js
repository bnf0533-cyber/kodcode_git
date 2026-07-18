import express from "express"
import { createTables } from "./db/db_init.js"
import router from "./routes/router.js"


const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use("/",router)
await createTables()


app.listen(PORT , () => {
    console.log("server iron running very well...");
})