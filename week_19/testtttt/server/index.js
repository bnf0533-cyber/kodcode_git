import express from "express";
import { createData, getAllItems } from "./config.js";
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors())
app.get("/item",async(req,res) => {
    try {
        const items = await getAllItems();
        res.json(items)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.post("/items", async (req, res) => {
    try {
        const { items } = req.body;
        const result = await createData(items)
        res.json(result)
    } catch (error) {
        res.json(error);
    }
});
app.listen(3000, () => {
    console.log("server running");
});
