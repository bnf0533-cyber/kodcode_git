import express from "express";
import scoreTracker from "../models/score.js";

const router = express.Router();

router.get("/global", async (req, res) => {
    try {
        const globalLeaderboard = await scoreTracker.aggregate([
            { $sort: { points: -1 } },
            { $limit: 10 },
            {
                $project: {
                    playerName: 1,
                    game: 1,
                    points: 1,
                    createdAt: 1,
                },
            },
        ]);
        return res.json(globalLeaderboard);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

router.get("/:game", async (req, res) => {
    try {
        const { game } = req.params;
        if (!game) return res.status(404).json("not found")
        const gameLeaderboard = await scoreTracker.aggregate([
            { $match: { game: game } },
            { $sort: { points: -1 } },
            { $limit: 10 },
        ]);
        const fullDetails = gameLeaderboard.map((item, index) => ({
            rank: index + 1,
            playerName: item.playerName,
            points: item.points,
            level: item.level,
        }));
        return res.json(fullDetails)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

export default router;
