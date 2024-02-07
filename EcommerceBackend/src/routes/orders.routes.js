import { Router } from 'express'
import orderController from '../controllers/orders.controllers.js'
import validateMiddleware from '../middlewares/validate.middlewares.js'
import orderSchema from '../schemas/orders.schemas.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const route = Router()
const { authenticate } = authMiddleware

route.post(
  '/',
  authenticate,
  validateMiddleware.validateRequest(orderSchema.create),
  orderController.create
)
route.put(
  '/:id',
  authenticate,
  validateMiddleware.validateRequest(orderSchema.update),
  orderController.updateOne
)
route.get('/:id', authenticate, orderController.getOne)
route.get('/', authenticate, orderController.getAll)
route.delete('/:id', authenticate, orderController.deleteOne)

export default route
