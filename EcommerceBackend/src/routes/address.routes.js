import { Router } from 'express'
import addressController from '../controllers/address.controllers.js'
import validateMiddleware from '../middlewares/validate.middlewares.js'
import addressSchema from '../schemas/address.schemas.js'

const route = Router()

route.post(
  '/',
  validateMiddleware.validateRequest(addressSchema.create),
  addressController.create
)
route.put(
  '/:id',
  validateMiddleware.validateRequest(addressSchema.update),
  addressController.updateOne
)
route.get('/:id', addressController.getOne)
route.get('/', addressController.getAll)
route.delete('/:id', addressController.deleteOne)

export default route
