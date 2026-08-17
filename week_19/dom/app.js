import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

const users = [
    { name: "moty", email: "motty@gmail.com" },
    { name: "talya", email: "talya@gmail.com" },
];

app.get("/api/users", (req, res) => {
    res.json(users);
});
app.post("/api/users", (req, res) => {
    const { name, email } = req.body;
    users.push(req.body);
    console.log("new user added ", name);

    res.status(201).json(users);
});

app.listen(3000, () => {
    console.log("server running");
});
