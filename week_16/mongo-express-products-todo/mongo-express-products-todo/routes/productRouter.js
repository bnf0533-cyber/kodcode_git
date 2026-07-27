import { Router } from 'express'
import {
    listProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../services/productService.js'

export const productRouter = Router()

// EXAMPLE: POST /products — full createProduct flow
productRouter.post('/products', async (req, res) => {
    try {
        const product = await createProduct(req.body)
        res.status(201).json(product)
    } catch (err) {
        if (err.status) {
            return res.status(err.status).json({ error: err.message })
        }
        res.status(500).json({ error: 'server error' })
    }
})

productRouter.get('/products', async (req, res) => {
    // TODO: listProducts  res.json (500 on error)
    throw new Error('TODO: GET /products')
})

productRouter.get('/products/:id', async (req, res) => {
    // TODO: getProduct  400 / 404 / 200
    throw new Error('TODO: GET /products/:id')
})

productRouter.put('/products/:id', async (req, res) => {
    // TODO: updateProduct  400 / 404 / 200
    throw new Error('TODO: PUT /products/:id')
})

productRouter.delete('/products/:id', async (req, res) => {
    // TODO: deleteProduct  400 / 404 / 204
    throw new Error('TODO: DELETE /products/:id')
})
