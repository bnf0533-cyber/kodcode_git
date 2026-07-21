import express from "express";
import scoreTracker from "../models/score.js";

const router = express.Router();

router.post("/scores", async (req, res) => {
    try {
        const { playerName, game, points, level, duration } = req.body;
        if (points < 0)
            return res.status(400).json({ error: "points cannot be negative" });
        const createScore = await scoreTracker.create({
            playerName: playerName,
            game: game,
            points: points,
            level: level,
            duration: duration,
        });
        console.log(createScore);

        res.json(createScore);
    } catch (error) {
        console.log("error");
        res.status(500).json("server error");
    }
});

export default router;
