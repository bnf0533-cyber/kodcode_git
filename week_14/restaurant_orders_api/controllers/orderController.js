import { readFile, writeFile } from '../service/orderService.js'

export const getOrders = async (req, res) => {
    try {
        const query = req.query
        let orders = await readFile()
        if (query.status) {
            orders = orders.filter(val => val.status === query.status)
        }
        if (query.customer) {
            orders = orders.filter(val => val.customer === query.customer)
        }
        if (query.table) {
            orders = orders.filter(val => val.table === Number(query.table))
        }
        res.json(orders)
    } catch (err) {
        res.status(500)
        res.json({ msg: "error" })
    }
}

export const getOrderById = (req, res) => {
    res.json(req.order)
}

export const createOrder = async (req, res) => {
    try {
        const body = req.body
        const orders = await readFile()
        let nextId = "1"
        if (orders.length > 0) {
            nextId = (Number(orders[orders.length - 1].id) + 1).toString()
        }
        const newOrder = {
            id: nextId,
            customer: body.customer,
            table: body.table,
            items: body.items || [],
            status: "NEW"
        }
        orders.push(newOrder)
        await writeFile(orders)
        res.status(201)
        res.json(newOrder)
    } catch (err) {
        res.status(500)
        res.json({ msg: "error" })
    }
}

export const updateOrder = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body
        const orders = await readFile()
        const findIndex = orders.findIndex(some => some.id === id)
        orders[findIndex].customer = body.customer || orders[findIndex].customer
        orders[findIndex].table = body.table || orders[findIndex].table
        orders[findIndex].items = body.items || orders[findIndex].items
        await writeFile(orders)
        res.json(orders[findIndex])
    } catch (err) {
        res.status(500)
        res.json({ msg: "error" })
    }
}

export const updateStatus = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body
        const orders = await readFile()
        const findIndex = orders.findIndex(some => some.id === id)
        const oldStatus = orders[findIndex].status
        const newStatus = body.status
        if (oldStatus === "NEW" && newStatus === "PREPARING") {
        } else if (oldStatus === "PREPARING" && newStatus === "READY") {
        } else if (oldStatus === "READY" && newStatus === "DELIVERED") {
        } else if (oldStatus === "NEW" && newStatus === "CANCELLED") {
        } else if (oldStatus === "PREPARING" && newStatus === "CANCELLED") {
        } else {
            res.status(400)
            return res.json({ msg: "Invalid status transition" })
        }
        orders[findIndex].status = newStatus
        await writeFile(orders)
        res.json(orders[findIndex])
    } catch (err) {
        res.status(500)
        res.json({ msg: "error" })
    }
}

export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params
        const orders = await readFile()
        const filtered = orders.filter(some => some.id !== id)
        await writeFile(filtered)
        res.json({ msg: "deleted" })
    } catch (err) {
        res.status(500)
        res.json({ msg: "error" })
    }
}