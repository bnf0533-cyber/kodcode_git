import express from "express"
import routerTasks from "./routes/tasks.js"
import routerNotes from "./routes/notes.js"
const app = express()

app.use(express.json());
app.use("/tasks" , routerTasks)
app.use("/notes", routerNotes)

app.listen(3000 , () => {
    console.log("server running.......");
    
})