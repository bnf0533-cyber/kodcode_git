import express from "express"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    console.log("hello");
    res.end("hello, client")
})

app.get("/momo", (req, res) => {
    console.log("momo");
    res.end("hello momo")
})

app.get("/a", (req, res) => {
    console.log(req.headers);
    res.end("hello")
})

app.get("/q", (req, res) => {
    const { username } = req.query
    if (!username || username.length < 5) return res.end("wrong man")
    console.log(req.query);
    res.end(`hello ${username}`)
})

app.get("/user/:id", (req, res) => {
    const { id } = req.params
    console.log(req.params.id);
    res.end("hello user")
})

app.post("/users",(req, res) => {
    console.log(req.body);
    res.end("end post")
})


app.listen(3000, () => {
    console.log("server running...");
})

