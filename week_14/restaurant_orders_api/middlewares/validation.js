export const validateOrder = (req, res, next) => {
    const body = req.body
    if (!body.customer || !body.table) {
        res.status(400)
        return res.json({ msg: "Missing required fields" })
    }
    next()
}