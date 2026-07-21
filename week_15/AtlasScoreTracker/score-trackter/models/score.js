import mongoose from "mongoose";

const playerScheme = new mongoose.Schema(
    {
        playerName: { type: String, required: true },
        game: { type: String, required: true },
        points: { type: Number, required: true, default: 0 },
        level: { type: Number, default: 0 },
        duration: { type: Number, default: 0 },
    },
    { timestamps: true }
);

const scoreTracker = mongoose.model("ScoreTracker", playerScheme);

export default scoreTracker;
