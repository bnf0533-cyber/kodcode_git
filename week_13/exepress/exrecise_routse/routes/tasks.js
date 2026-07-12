import express from "express"

const router = express.Router();

const tasks = [
    { "id": 1, "title": "Fix API bug" },
    { "id": 2, "title": "Update DB schema" },
    { "id": 3, "title": "Review PRs" },
    { "id": 4, "title": "Write unit tests" },
    { "id": 5, "title": "Refactor auth" }
]
router.get("/", (req, res) => {
    return res.json(tasks)
})

router.post("/", (req, res) => {
    const { title } = req.query
    if (!title) {
        res.status(400)
        res.end("somthing wrog in tasks")
        
    }
    tasks.push({ id: 6, title })
    return res.json(tasks)
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    console.log(id);

    const finId = tasks.find(t => t.id === +id)
    if (!finId) {
        res.status(404)
        res.end("wrong id")
    }
    return res.json(finId)
})



export default router