import { Router } from 'express'
//import routes from "./index.js";
import usersController from '../controllers/users.controllers.js'
import usersSchema from '../schemas/users.schemas.js'
import validateMiddleware from '../middlewares/validate.middlewares.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const routes = Router()
const { authenticate } = authMiddleware

// routes.post(
//   '/',
//   validateMiddleware.validateRequest(usersSchema.create),
//   usersController.create
// )
routes.put(
  '/:id',
  authenticate,
  validateMiddleware.validateRequest(usersSchema.update),
  usersController.update
)
routes.get('/', authenticate, usersController.getAll)
routes.get('/:id', authenticate, usersController.getOne)
routes.delete('/:id', authenticate, usersController.deleteOne)
//routes.post('/', (req,res)=>res.send(req.body))

export default routes
