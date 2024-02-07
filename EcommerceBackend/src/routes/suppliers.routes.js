import { Router } from 'express'
import supplierController from '../controllers/suppliers.controllers.js'
import validateMiddleware from '../middlewares/validate.middlewares.js'
import supplierSchema from '../schemas/suppliers.schemas.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const route = Router()
const { authenticate } = authMiddleware

route.post(
  '/',
  authenticate,
  validateMiddleware.validateRequest(supplierSchema.create),
  supplierController.create
)
route.put(
  '/:id',
  authenticate,
  validateMiddleware.validateRequest(supplierSchema.update),
  supplierController.updateOne
)
route.get('/:id', authenticate, supplierController.getOne)
route.get('/', authenticate, supplierController.getAll)
route.delete('/:id', authenticate, supplierController.deleteOne)

export default route
