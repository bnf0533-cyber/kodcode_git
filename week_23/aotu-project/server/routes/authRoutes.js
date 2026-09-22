import {
    createUserController,
    getAllUsersController,
    loginUserController,
} from "../controllers/authController.js";

import express from "express";
import { getAllUsersMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", createUserController);

router.post("/login", loginUserController);

router.get("/users", getAllUsersMiddleware, getAllUsersController);

export default router;
