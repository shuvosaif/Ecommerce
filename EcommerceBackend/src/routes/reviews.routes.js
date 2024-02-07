import { Router } from 'express'
import reviewController from '../controllers/reviews.controllers.js'
import validateMiddleware from '../middlewares/validate.middlewares.js'
import reviewSchema from '../schemas/reviews.schemas.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const route = Router()
const { authenticate } = authMiddleware

route.post(
  '/',
  authenticate,
  validateMiddleware.validateRequest(reviewSchema.create),
  reviewController.create
)
route.put(
  '/:id',
  authenticate,
  validateMiddleware.validateRequest(reviewSchema.update),
  reviewController.updateOne
)
route.get('/:id', authenticate, reviewController.getOne)
route.get('/', authenticate, reviewController.getAll)
route.delete('/:id', authenticate, reviewController.deleteOne)

export default route
