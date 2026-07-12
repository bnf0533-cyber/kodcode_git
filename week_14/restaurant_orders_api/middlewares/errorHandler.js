export const errorHandler = (err, req, res, next) => {
    console.log(err)
    res.status(500)
    res.json({ msg: "Internal server error" })
}