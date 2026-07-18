import express from "express"
import { insertNewOperator } from "../controllers/operatorsControllers.js"
const router = express.Router()

router.post("/operators", insertNewOperator)

router.post("/incidents")

router.patch("/incidents/:id/status")

router.get("/incidents/open")

export default router;