import { Router } from 'express'
import productController from '../controllers/products.controllers.js'
import productUploadMiddleware from '../middlewares/products.upload.middleware.js'
import productSchema from '../schemas/products.schemas.js'
import validateMiddleware from '../middlewares/validate.middlewares.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const route = Router()
const { authenticate } = authMiddleware

route.post(
  '/',
  authenticate,
  productUploadMiddleware.upload.single('image'),
  validateMiddleware.validateRequest(productSchema.create),
  productController.create
)
route.put(
  '/:id',
  authenticate,
  productUploadMiddleware.upload.single('image'),
  validateMiddleware.validateRequest(productSchema.update),
  productController.updateOne
)
route.get('/:id', authenticate, productController.getOne)
route.get('/', productController.getAll)
route.delete('/:id', authenticate, productController.deleteOne)

export default route
