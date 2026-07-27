import { Router } from 'express'
import {
    listUserProducts,
    getUserProduct,
    createUserProduct,
    updateUserProduct,
    deleteUserProduct,
} from '../services/userProductService.js'

export const userProductRouter = Router()

// EXAMPLE: POST /user-products — connect userId + productId
userProductRouter.post('/user-products', async (req, res) => {
    try {
        const userProduct = await createUserProduct(req.body)
        res.status(201).json(userProduct)
    } catch (err) {
        if (err.status) {
            return res.status(err.status).json({ error: err.message })
        }
        res.status(500).json({ error: 'server error' })
    }
})

userProductRouter.get('/user-products', async (req, res) => {
    // TODO: listUserProducts  res.json (500 on error)
    throw new Error('TODO: GET /user-products')
})

userProductRouter.get('/user-products/:id', async (req, res) => {
    // TODO: getUserProduct  400 / 404 / 200
    throw new Error('TODO: GET /user-products/:id')
})

userProductRouter.put('/user-products/:id', async (req, res) => {
    // TODO: updateUserProduct  400 / 404 / 200
    throw new Error('TODO: PUT /user-products/:id')
})

userProductRouter.delete('/user-products/:id', async (req, res) => {
    // TODO: deleteUserProduct  400 / 404 / 204
    throw new Error('TODO: DELETE /user-products/:id')
})
