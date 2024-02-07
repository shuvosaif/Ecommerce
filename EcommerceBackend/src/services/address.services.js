import addressModel from '../models/address.models.js'

const addressService = {}

addressService.create = async (payload) => {
  try {
    let result = await addressModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}
addressService.updateOne = async (id, payload) => {
  try {
    let result = await addressModel.findByIdAndUpdate({ _id: id }, payload)
    return result
  } catch (error) {
    throw error
  }
}
addressService.getOne = async (id) => {
  try {
    let result = await addressModel.findOne({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}
addressService.getAll = async () => {
  try {
    let result = await addressModel.find()
    return result
  } catch (error) {
    throw error
  }
}
addressService.deleteOne = async (id) => {
  try {
    let result = await addressModel.findByIdAndDelete({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}

export default addressService
