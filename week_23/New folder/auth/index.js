import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./utils/errorHandler.js";
import "./db/db.js";

const app = express();
const port = Number(process.env.PORT) || 4876;

app.use(cors({}));
app.use(express.json());

app.use("/users", userRoutes);

app.use((_, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Auth teaching server running on http://localhost:${port}`);
});
