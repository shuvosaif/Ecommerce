import { Router } from 'express'
import shipperController from '../controllers/shippers.controllers.js'
import validateMiddleware from '../middlewares/validate.middlewares.js'
import shipperSchema from '../schemas/shippers.schemas.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const route = Router()
const { authenticate } = authMiddleware

route.post(
  '/',
  authenticate,
  validateMiddleware.validateRequest(shipperSchema.create),
  shipperController.create
)
route.put(
  '/:id',
  authenticate,
  validateMiddleware.validateRequest(shipperSchema.update),
  shipperController.updateOne
)
route.get('/:id', authenticate, shipperController.getOne)
route.get('/', authenticate, shipperController.getAll)
route.delete('/:id', authenticate, shipperController.deleteOne)

export default route
