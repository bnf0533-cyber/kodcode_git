import { manifestStudent, resaveStudentById } from "../controller/students.ctrl.js";

import express from "express";

const router = express.Router();

router.post("/",manifestStudent);

router.get("/:userId",resaveStudentById);

export default router;
