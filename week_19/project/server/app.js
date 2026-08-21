import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import tasksRoutes from "./routes/tasks.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasksRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.status ? err.message : "Something wrong";
  res.status(status).json({ success: false, message });
});

app.listen(port, (e) => {
  if (e) return console.log(e);
  console.log(`Server running on http://localhost:${port}`);
});
