import shipperModel from '../models/shippers.models.js'

const shipperService = {}

shipperService.create = async (payload) => {
  try {
    let result = await shipperModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}
shipperService.updateOne = async (id, payload) => {
  try {
    let result = await shipperModel.findByIdAndUpdate({ _id: id }, payload)
    return result
  } catch (error) {
    throw error
  }
}
shipperService.getOne = async (id) => {
  try {
    let result = await shipperModel.findOne({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}
shipperService.getAll = async () => {
  try {
    let result = await shipperModel.find()
    return result
  } catch (error) {
    throw error
  }
}
shipperService.deleteOne = async (id) => {
  try {
    let result = await shipperModel.findByIdAndDelete({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}

export default shipperService
