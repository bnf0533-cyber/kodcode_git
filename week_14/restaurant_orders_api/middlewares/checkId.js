import { readFile } from '../service/orderService.js'

export const checkId = async (req, res, next) => {
    const { id } = req.params
    const orders = await readFile()
    const find = orders.find(some => some.id === id)
    if (!find) {
        res.status(404)
        return res.json({ msg: "Invalid ID" })
    }
    req.order = find
    next()
}