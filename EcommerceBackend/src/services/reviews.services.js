import reviewModel from '../models/reviews.models.js'

const reviewService = {}

reviewService.create = async (payload) => {
  try {
    let result = await reviewModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}
reviewService.updateOne = async (id, payload) => {
  try {
    let result = await reviewModel.findByIdAndUpdate({ _id: id }, payload)
    return result
  } catch (error) {
    throw error
  }
}
reviewService.getOne = async (id) => {
  try {
    let result = await reviewModel.findOne({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}
reviewService.getAll = async () => {
  try {
    let result = await reviewModel.find()
    return result
  } catch (error) {
    throw error
  }
}
reviewService.deleteOne = async (id) => {
  try {
    let result = await reviewModel.findByIdAndDelete({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}

export default reviewService
