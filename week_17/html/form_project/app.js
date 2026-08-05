import express from "express";
import "./db/connection.db.js";
import { connection } from "./db/connection.db.js";
const app = express();
const db = connection;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/contact", async (req, res) => {
    console.log(req.body);
    try {
        const { name, email, subject, message } = req.body;
        if (!name || !email || !subject || !message || message.length < 10) {
            return res.status(400).send("details not good");
        }
        const saveInDb = await db
            .collection("contacts")
            .insertOne(req.body, new Date.now());
        res.status(201).redirect("/thanks");
    } catch (error) {
        res.status(500).send("check yourself or server");
    }
});

app.get("/admin", async (req, res) => {
    console.log(req.params);
    try {
        const getAll = await db.collection("contacts").find().toArray();
        res.status(200).send({ data: getAll[0] });
    } catch (error) {
        res.status(400).json("something wrong");
    }
});

app.listen(3000, () => {
    console.log("server running on port 3000...");
});
