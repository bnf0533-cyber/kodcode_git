import { Router } from 'express'
import {
    listUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} from '../services/userService.js'

export const userRouter = Router()

userRouter.post('/users', async (req, res) => {
    try {
        const user = await createUser(req.body)
        res.status(201).json(user)
    } catch (err) {
        if (err.status) {
            return res.status(err.status).json({ error: err.message })
        }
        res.status(500).json({ error: 'server error' })
    }
})

userRouter.get('/users', async (req, res) => {
    // TODO: listUsers  res.json (500 on error)
    throw new Error('TODO: GET /users')
})

userRouter.get('/users/:id', async (req, res) => {
    // TODO: getUser  400 / 404 / 200
    throw new Error('TODO: GET /users/:id')
})



userRouter.put('/users/:id', async (req, res) => {
    // TODO: updateUser  400 / 404 / 200
    throw new Error('TODO: PUT /users/:id')
})

userRouter.delete('/users/:id', async (req, res) => {
    // TODO: deleteUser  400 / 404 / 204
    throw new Error('TODO: DELETE /users/:id')
})
