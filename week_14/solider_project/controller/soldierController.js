import { insertToDb, getUserByQuery, updateSoldier, deleteSoldierById, updateStatusById, getById, getSoldierById } from "../service/soliderService.js"
import { soldierSchema, statusSchema } from "../validation/validation.js"

export async function insertNewSolider(req, res) {
    try {
        const result = soldierSchema.safeParse(req.body)
        if (!result.success) {
            return res.status(400).json({
                error: "validation failed",
                details: result.error.errors
            })
        }
        const validationData = result.data
        const soldier = await insertToDb(validationData)
        return res.status(201).json({ "success create": soldier })
    } catch (err) {
        console.log(err);
        res.status(500).json("server error")
    }
}

export async function getSoldierByIdParams(req, res) {
    try {
        const { id } = req.params
        const get = await getSoldierById(id)
        if (!get) {
            return res.status(404).json("solider not found")
        }
        res.json(get)
    } catch (err) {
        console.log(err);
        res.status(500).json("server error")
    }
}

export async function getByQuery(req, res) {
    try {
        const { unit, role, status } = req.query
        const toDoGet = await getUserByQuery(unit, role, status)
        res.json(toDoGet)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "server error" })
    }
}

export async function updateSoldierById(req, res) {
    try {
        const result = soldierSchema.safeParse(req.body)
        if (!result.success) {
            return res.status(400).json({
                error: "validation failed",
                details: result.error.errors
            })
        }
        const validationData = result.data
        const { id } = req.params

        const { name, role, unit, age, status } = validationData
        const update = await updateSoldier(name, role, unit, age, status, id)
        if (!update) {
            return res.status(404).json("soldier not found")
        }
        res.json(update)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

export async function deleteSoldier(req, res) {
    try {
        const { id } = req.params
        const response = await deleteSoldierById(id)
        if (response.affectedRows === 0) {
            return res.status(404).json("soldier not found")
        }
        res.json({ delete: true })
    } catch (err) {
        console.log(err);
        res.status(500).json("server error")
    }
}

export async function updateStatusSoldier(req, res) {
    try {
        const result = statusSchema.safeParse(req.body)
        if (!result.success){
            return res.status(400).json({
                error : "validation failed",
                details : result.error.errors
            })
        }
        const validationData = result.data
        const { id } = req.params
        const update = await updateStatusById(validationData.status, id)
        if (!update) {
            return res.status(404).json("soldier not found")
        }
        res.json(update)
    } catch (err) {
        console.log(err);
        res.status(500).json("server error")
    }

}