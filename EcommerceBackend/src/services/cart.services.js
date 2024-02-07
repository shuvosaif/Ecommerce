import cartModel from '../models/cart.models.js'

const cartService = {}

cartService.create = async (payload) => {
  try {
    let result = await cartModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}
cartService.updateOne = async (id, payload) => {
  try {
    let result = await cartModel.findByIdAndUpdate({ _id: id }, payload)
    return result
  } catch (error) {
    throw error
  }
}
cartService.getOne = async (id) => {
  try {
    let result = await cartModel.findOne({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}
cartService.getAll = async () => {
  try {
    let result = await cartModel.find()
    return result
  } catch (error) {
    throw error
  }
}
cartService.deleteOne = async (id) => {
  try {
    let result = await cartModel.findByIdAndDelete({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}

export default cartService
