import express from 'express'
import usersRoute from './users.routes.js'
import authRoute from './auth.routes.js'
import categoryRoute from './category.routes.js'
import supplierRoute from './suppliers.routes.js'
import addressRoute from './address.routes.js'
import reviewRoute from './reviews.routes.js'
import productRoute from './products.routes.js'
import authMiddleware from '../middlewares/auth.middleware.js'
import sessionRoute from './sessions.routes.js'
import cartRoute from './cart.routes.js'
import wishlistRoute from './wishlists.routes.js'
import orderRoute from './orders.routes.js'
import shipperRoute from './shippers.routes.js'

const routes = express.Router()

routes.use('/health', (_, res) => {
  res.send('Server is running!')
})

routes.use('/api/v1/auth', authRoute)

routes.use('/api/v1/users', usersRoute)
routes.use('/api/v1/product', productRoute)
routes.use('/api/v1/category', categoryRoute)
routes.use('/api/v1/supplier', supplierRoute)
routes.use('/api/v1/address', addressRoute)
routes.use('/api/v1/review', reviewRoute)
routes.use('/api/v1/session', authMiddleware.authenticate, sessionRoute)

routes.use('/api/v1/cart', authMiddleware.authenticate, cartRoute)
routes.use('/api/v1/wishlist', authMiddleware.authenticate, wishlistRoute)
routes.use('/api/v1/order', authMiddleware.authenticate, orderRoute)
routes.use('/api/v1/shipper', authMiddleware.authenticate, shipperRoute)

export default routes
