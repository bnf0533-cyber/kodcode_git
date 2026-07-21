import express from "express";
import scoreTracker from "../models/score.js";

const router = express.Router();

router.get("/games", async (req, res) => {
    try {
        const games = await scoreTracker.distinct("game");
        res.json(games);
    } catch (e) {
        console.log(e);
        res.json(e);
    }
});

export default router;
