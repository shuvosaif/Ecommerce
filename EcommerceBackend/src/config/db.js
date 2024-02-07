import mongoose from 'mongoose'
import config from './index.js'

mongoose.set('strictQuery', true)

const databaseConenction = async () => {
  try {
    const OPTIONS = {}
    await mongoose.connect(config.databaseurl, OPTIONS)
    console.log('Database Connected Successfully ')
  } catch (error) {
    console.log('Database Connection Failed')
    process.exit(1)
  }
}

export default databaseConenction
