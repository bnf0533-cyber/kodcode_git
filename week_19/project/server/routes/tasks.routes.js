import { Router } from "express";
import {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
} from "../controllers/tasks.controller.js";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
