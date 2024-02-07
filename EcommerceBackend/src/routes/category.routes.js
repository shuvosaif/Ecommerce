import { Router } from 'express'
import categoryController from '../controllers/category.controllers.js'
import categorySchema from '../schemas/category.schemas.js'
import validateMiddleware from '../middlewares/validate.middlewares.js'

const route = Router()

route.post(
  '/',
  validateMiddleware.validateRequest(categorySchema.create),
  categoryController.create
)
route.put(
  '/:id',
  validateMiddleware.validateRequest(categorySchema.update),
  categoryController.updateOne
)
route.get('/:id', categoryController.getOne)
route.get('/', categoryController.getAll)
route.delete('/:id', categoryController.deleteOne)

export default route
