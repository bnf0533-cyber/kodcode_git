import express from 'express'
import { getOrders, getOrderById, createOrder, updateOrder, updateStatus, deleteOrder } from '../controllers/orderController.js'
import { validateOrder } from '../middlewares/validation.js'
import { checkId } from '../middlewares/checkId.js'

const router = express.Router()

router.get('/orders', getOrders)
router.get('/orders/:id', checkId, getOrderById)
router.post('/orders', validateOrder, createOrder)
router.put('/orders/:id', checkId, validateOrder, updateOrder)
router.patch('/orders/:id/status', checkId, updateStatus)
router.delete('/orders/:id', checkId, deleteOrder)

export default router