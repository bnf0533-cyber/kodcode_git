import express from "express";
import "./db/db.js";
import scoreTracker from "./models/score.js";
import createScore from "./routes/scores.js";
import globalLeaderboard  from "./routes/leaderboard.js"
import allGames from "./routes/games.js"
import player from "./routes/player.js"
import stats from "./routes/stats.js"

const app = express();
app.use(express.json());

app.use("/", createScore);

app.use("/leaderboard" , globalLeaderboard )

app.use("/" , allGames)

app.use("/" , player)

app.use("/" , stats)
app.listen(process.env.PORT, () => {
    console.log("server running...");
});
