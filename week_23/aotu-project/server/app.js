import express from "express";
import "dotenv/config"
import "./config/db.js"
import authRouter from "./routes/authRoutes.js"
import cors from "cors";
const PORT = process.env.PORT || 3000

const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth" , authRouter)
app.listen(PORT, () => {
    console.log(`server Authentication Flow running on ${PORT}...`);
});
