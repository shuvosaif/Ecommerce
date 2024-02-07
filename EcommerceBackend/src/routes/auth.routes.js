import { Router } from 'express'
import validateMiddleware from '../middlewares/validate.middlewares.js'
import authController from '../controllers/auth.controllers.js'
import usersSchema from '../schemas/users.schemas.js'
import uploadMiddleware from '../middlewares/upload.middlewares.js'

const routes = Router()
const { validateRequest } = validateMiddleware
const { login } = authController

routes.post(
  '/register',
  uploadMiddleware.upload.single('avatar'),
  validateRequest(usersSchema.create),
  authController.register
)
routes.post('/login', login)

export default routes
