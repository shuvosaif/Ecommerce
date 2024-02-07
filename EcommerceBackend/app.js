import express from 'express'
import GlobalMiddleware from './src/middlewares/globals.middlewares.js'
import databaseConenction from './src/config/db.js'
import config from './src/config/index.js'
import routes from './src/routes/index.js'

const app = express()

// data base connection
databaseConenction()

//log generation
app.use(GlobalMiddleware.middlewares)

//all routes are redirected to routes/indesx.js file for routing accroding to the purpose
app.use(routes)

//if any unknown url arrived as req then it is handled by not found handler
// all error response will be handled through error handler
//app.use([GlobalMiddleware.notFoundHandler, GlobalMiddleware.errorHandler])

// server creation binding port adrress.
app.listen(config.port, () => {
  try {
    console.log('Server Is Runnig Smoothly')
  } catch (error) {
    console.log('Server Connection Failed')
  }
})
