import express from "express"
import { insertNewSolider , getByQuery, updateSoldierById, deleteSoldier, updateStatusSoldier, getSoldierByIdParams } from "../controller/soldierController.js"
import { getById, updateSoldier} from "../service/soliderService.js"
import { pool } from "../db/db_soldier.js"

const router = express.Router()

router.post("/", insertNewSolider)

router.get("/", getByQuery)

router.get("/:id",getSoldierByIdParams)

router.put("/:id",updateSoldierById)

router.delete("/:id",deleteSoldier)

router.patch("/:id/status",updateStatusSoldier)

export default router