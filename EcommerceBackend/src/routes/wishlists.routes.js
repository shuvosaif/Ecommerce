import { Router } from 'express'
import wishlistController from '../controllers/wishlists.controllers.js'

const route = Router()

route.post('/', wishlistController.create)
route.put('/:id', wishlistController.updateOne)
route.get('/:id', wishlistController.getOne)
route.get('/', wishlistController.getAll)
route.delete('/:id', wishlistController.deleteOne)

export default route
