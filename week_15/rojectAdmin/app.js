import express from "express";
import "./db/db.js";
import router from "./routes/router.js";
const app = express();
app.use(express.json());

app.use("/", router);

app.listen(process.env.PORT, () => {
    console.log("server running...");
});
