import supplierModel from '../models/suppliers.models.js'

const supplierService = {}

supplierService.create = async (payload) => {
  try {
    let result = await supplierModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}
supplierService.updateOne = async (id, payload) => {
  try {
    let result = await supplierModel.findByIdAndUpdate({ _id: id }, payload)
    return result
  } catch (error) {
    throw error
  }
}
supplierService.getOne = async (id) => {
  try {
    let result = await supplierModel.findOne({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}
supplierService.getAll = async () => {
  try {
    let result = await supplierModel.find()
    return result
  } catch (error) {
    throw error
  }
}
supplierService.deleteOne = async (id) => {
  try {
    let result = await supplierModel.findByIdAndDelete({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}

export default supplierService
