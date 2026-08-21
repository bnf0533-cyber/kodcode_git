import express from "express";
import { createPlayer, createRound, addCardToPlayer,playerStand } from "../dal/game.dal.js";

const router = express.Router();

router.post("/start-game", async (req, res) => {
    try {
        const player = await createPlayer();
        res.status(201).json(player);
    } catch (error) {
        console.error(error);
        res.json(error);
    }
});
router.post("/start-round", async (req, res) => {
    try {
        const { bet } = req.body;
        const { playerId } = req.query;
        const game = await createRound(bet, playerId);
        return res.status(201).json(game);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

router.post("/hit", async (req, res) => {
    try {
        const { playerId } = req.query;
        const update = await addCardToPlayer(playerId);
        res.status(201).json(update);
    } catch (error) {
        res.status(404).json("your not in progress start new game");
    }
});

router.post("/stand", async (req, res) => {
    try {
        const { playerId } = req.query;
        const stop = playerStand(playerId)
        res.status(201).json(await stop)
    } catch (error) {
        res.status(404).json("not found")
    }
});
export default router;
