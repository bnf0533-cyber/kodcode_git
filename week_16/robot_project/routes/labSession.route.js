import express from "express";

import { injectSession, showSession } from "../controller/sessions.ctrl.js";

const router = express.Router();

router.post("/:sessionId/register", injectSession);

router.get("/:sessionId",showSession);

export default router;
