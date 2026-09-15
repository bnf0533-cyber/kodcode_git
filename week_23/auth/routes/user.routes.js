import { Router } from "express";
import { createUser, getCurrentUser, loginUser } from "../ctrls/user.ctrl.js";
import { authMiddleware } from "../utils/auth.middleware.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";
import { validate } from "../utils/validate.js";
import {
    createUserSchema,
    loginUserSchema,
} from "../validations/user.validation.js";

const router = Router();

router.post("/register", validate(createUserSchema), asyncWrapper(createUser));

router.post("/login", validate(loginUserSchema), asyncWrapper(loginUser));

router.get("/me", authMiddleware, asyncWrapper(getCurrentUser));

export default router;
