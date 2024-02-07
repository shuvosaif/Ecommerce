import { Router } from 'express'
import sessionSchema from '../schemas/sessions.schemas.js'
import validateMiddleware from '../middlewares/validate.middlewares.js'
import sessionController from '../controllers/sessions.controllers.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const route = Router()
const { authenticate } = authMiddleware

route.post(
  '/',
  authenticate,
  validateMiddleware.validateRequest(sessionSchema.create),
  sessionController.create
)
route.put(
  '/:id',
  authenticate,
  validateMiddleware.validateRequest(sessionSchema.update),
  sessionController.updateOne
)
route.get('/:id', authenticate, sessionController.getOne)
route.get('/', authenticate, sessionController.getAll)
route.delete('/:id', authenticate, sessionController.deleteOne)

export default route
