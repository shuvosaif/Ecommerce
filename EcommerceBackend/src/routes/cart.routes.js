import { Router } from 'express'
import cartController from '../controllers/cart.controllers.js'

const route = Router()

route.post('/', cartController.create)
route.put('/:id', cartController.updateOne)
route.get('/:id', cartController.getOne)
route.get('/', cartController.getAll)
route.delete('/:id', cartController.deleteOne)

export default route
