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
                    allScores: [{ $sort: { createAt: -1 } }],
                    bastPerGame: [
                        {
                            $group: {
                                _id: "$game",
                                bast: { $max: "$points" },
                            },
                        },
                        {
                            $project: {
                                _id: 0,
                                game: "$_id",
                                bast: 1,
                            },
                        },
                    ],
                },
            },
        ]);
        res.json(playerDetails);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

export default router;
