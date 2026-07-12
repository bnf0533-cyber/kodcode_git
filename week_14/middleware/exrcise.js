import express from "express"
import { nextTick } from "node:process"
const app = express()
const router = express.Router()
// 1

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    next()
})

// 2

app.get("/time", (req, res) => {
    res.end(`Request received at: ${req.requestTime}`)
})

// 3
app.use(express.json())
app.use((req, res, next) => {
    if (req.method.toLowerCase() === "post" && Object.keys(req.body).length === 0) {
        res.status(400)
        return res.end("body cannot be empty")
    }
    next()
})

// 4

app.post("/data", (req, res) => {
    return res.end("Data received")
})

// 5

app.post("/register", (req, res) => {
    const { password } = req.body
    if (!password || password.length < 8) {
        res.status(400)
        return res.end("Password must be at least 8 chars.")
    }
    res.end("success")
})

// 6

const checkAdmin = (req, res, next) => {
    if (req.query.admin !== "true") {
        res.status(403)
        return res.end("Forbidden: Admins only.")
    }
    next()
}

// 7

app.get("/settings", checkAdmin, (req, res) => {

    res.end("welcome to the admin settings")
})

// 8

app.get("/error-test", (req, res) => {
    throw new Error("something went wrong.")
})

// 9

app.use((err, req, res, next) => {
    res.status(500)
    res.json({ error: true, message: err.message })
})

// 10

app.get("/search", (req , res) => {
    if (!req.query.q) {
        res.status(400)
        return res.end("Search query 'q' is required.")
    }
    res.end("searching...")
})

app.listen(3000, () => {
    console.log("Server running...")
})
