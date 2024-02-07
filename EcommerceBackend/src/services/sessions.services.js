import sessionModel from '../models/sessions.model.js'

const sessionService = {}

sessionService.create = async (payload) => {
  try {
    let result = await sessionModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}
sessionService.updateOne = async (id, payload) => {
  try {
    let result = await sessionModel.findByIdAndUpdate({ _id: id }, payload)
    return result
  } catch (error) {
    throw error
  }
}
sessionService.getOne = async (id) => {
  try {
    let result = await sessionModel.findOne({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}
sessionService.getAll = async () => {
  try {
    let result = await sessionModel.find()
    return result
  } catch (error) {
    throw error
  }
}
sessionService.deleteOne = async (id) => {
  try {
    let result = await sessionModel.findByIdAndDelete({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}

export default sessionService
