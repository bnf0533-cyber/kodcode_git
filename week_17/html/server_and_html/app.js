import e from "express";
import express from "express";

const app = express();

app.use(express.urlencoded());

app.post("/addUser", (req, res) => {
    const body = req.body;
    console.log(body);
    res.status(201).json({ success: body });
});
app.get("/getUser", (req, res) => {
    const body = req.query;
    console.log(body);
    res.status(201).json({ success: body });
});
app.post("/editUser", (req, res) => {
    const body = req.query;
    console.log(body);
    res.status(201).json({ success: body });
});
app.post("/deleteUser", (req, res) => {
    const body = req.query;
    console.log(body);
    res.status(201).json({ success: body });
});

app.listen(3000, () => {
    console.log("server running...");
});
