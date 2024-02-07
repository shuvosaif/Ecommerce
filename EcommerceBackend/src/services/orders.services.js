import orderModel from '../models/orders.models.js'

const orderService = {}

orderService.create = async (payload) => {
  try {
    let result = await orderModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}
orderService.updateOne = async (id, payload) => {
  try {
    let result = await orderModel.findByIdAndUpdate({ _id: id }, payload)
    return result
  } catch (error) {
    throw error
  }
}
orderService.getOne = async (id) => {
  try {
    let result = await orderModel.findOne({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}
orderService.getAll = async () => {
  try {
    let result = await orderModel.find()
    return result
  } catch (error) {
    throw error
  }
}
orderService.deleteOne = async (id) => {
  try {
    let result = await orderModel.findByIdAndDelete({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}

export default orderService
