import wishlistModel from '../models/wishlists.models.js'

const wishlistService = {}

wishlistService.create = async (payload) => {
  try {
    let result = await wishlistModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}
wishlistService.updateOne = async (id, payload) => {
  try {
    let result = await wishlistModel.findByIdAndUpdate({ _id: id }, payload)
    return result
  } catch (error) {
    throw error
  }
}
wishlistService.getOne = async (id) => {
  try {
    let result = await wishlistModel.findOne({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}
wishlistService.getAll = async () => {
  try {
    let result = await wishlistModel.find()
    return result
  } catch (error) {
    throw error
  }
}
wishlistService.deleteOne = async (id) => {
  try {
    let result = await wishlistModel.findByIdAndDelete({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}

export default wishlistService
