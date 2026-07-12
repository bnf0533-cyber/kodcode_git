import express from "express"
import { usersRouter } from "./users.js";
const router = express.Router();

router.get("/" , (req , res) => {
    res.json([{}])
})
