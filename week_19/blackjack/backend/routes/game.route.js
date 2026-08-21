import express from "express";
import {
    createPlayer,
    createRound,
    addCardToPlayer,
    playerStand,
} from "../dal/game.dal.js";

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
        const playerId = req.headers["x-player-id"] || req.query.playerId;
        const game = await createRound(bet, playerId);
        return res.status(201).json(game);
    } catch (error) {
        if (error.message === "active round exist") {
            return res.status(409).json(error.message);
        }
        if (error.message === "invalid chips" || error.message === "player not found"){
            return res.status(400).json(error.message)
        }
        console.error(error);
        res.status(500).json(error);
    }
});

router.post("/hit", async (req, res) => {
    try {
        const playerId = req.headers["x-player-id"] || req.query.playerId;
        const update = await addCardToPlayer(playerId);
        res.status(200).json(update);
    } catch (error) {
        res.status(404).json("your not in progress start new game");
    }
});

router.post("/stand", async (req, res) => {
    try {
        const playerId = req.headers["x-player-id"] || req.query.playerId;
        const stop = await playerStand(playerId);
        res.status(200).json(stop);
    } catch (error) {
        res.status(404).json("not found");
    }
});
export default router;
