import express from "express"
const products = [
    { id: 1, name: 'Laptop', price: 3000, category: 'tech' },
    { id: 2, name: 'Mouse', price: 150, category: 'tech' },
    { id: 3, name: 'Desk', price: 800, category: 'furniture' },
    { id: 4, name: 'Monitor', price: 1200, category: 'tech' },
];

const app = express()

app.get("/products/:id", (req, res) => {
    const { id } = req.params
    if (!id || isNaN(id)) {
        res.status(404)
        return res.end("wrong url")
    }
    const find = products.find(some => some.id === +id)
    if (!find) {
        res.status(400)
        return res.end(`${id} not found.`)
    }
    res.json(find)
})

app.get("/products", (req, res) => {
    const { category, minPrice, maxPrice, sort } = req.query

    if (category) {
        return res.json(products.filter(val => val.category === category))

    } if (minPrice && maxPrice) {

        const finp = products.filter(val => val.price > minPrice && val.price < maxPrice)
        return res.json(finp)

    } if (sort) {
        const sorf = products.sort((a, b) => a.price - b.price)
        return res.json(sorf)

    } else {
        return res.json(products)
    }


})

app.get("/products", (req, res) => {

})

app.get("/products", (req, res) => {
    const qp = req.query
    if (qp.length > 0) {

    }
})



app.listen(3000, (res) => {
    console.log("server running.....")
})