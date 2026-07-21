import express from "express";
import scoreTracker from "../models/score.js";

const router = express.Router();

router.get("/stats", async (req, res) => {
    try {
        const systemStats = await scoreTracker.aggregate([
            {
                $facet: {
                    popularGame: [
                        { $group: { _id: "$game", count: { $sum: 1 } } },
                        { $sort: { count: -1 } },
                        { $limit: 1 },
                    ],
                    systemOverview: [
                        {
                            $group : {
                                _id :null,
                                totalGamePlayer : {$sum :1},
                                totalPointEver : {$sum : "$points"},
                                averageLevel : {$avg : "level"}
                            }
                        }
                    ]
                },
            },
        ]);
        res.json(systemStats)
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

export default router;
