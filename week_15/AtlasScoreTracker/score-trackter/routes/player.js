import express from "express";
import scoreTracker from "../models/score.js";

const router = express.Router();

router.get("/player/:name", async (req, res) => {
    try {
        const { name } = req.params;
        const playerDetails = await scoreTracker.aggregate([
            { $match: { playerName: name } },
            {
                $facet: {
                    allScores: [{ $sort: { createdAt: -1 } }],
                    bestPerGame: [
                        {
                            $group: {
                                _id: "$game",
                                best: { $max: "$points" },
                            },
                        },
                        {
                            $project: {
                                _id: 0,
                                game: "$_id",
                                best: 1,
                            },
                        },
                    ],
                },
            },
        ]);
        res.json(playerDetails);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

export default router;
