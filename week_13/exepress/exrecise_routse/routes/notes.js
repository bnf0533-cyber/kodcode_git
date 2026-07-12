import express from "express"

const router = express.Router();


const notes = [
    { "id": 1, "title": "Meeting notes" },
    { "id": 2, "title": "Project ideas" },
    { "id": 3, "title": "Grocery list" },
    { "id": 4, "title": "Code snippets" },
    { "id": 5, "title": "Reminders" }
]

router.get("/", (req, res) => {
    return res.json(notes)
})

router.post("/", (req, res) => {
    const { title } = req.query
    if (!title) {
        res.status(400)
        res.end("somthing wrong")
    }
    notes.push({ id: 6, title })
    return res.json(notes)

})

export default router;