import productModel from '../models/products.models.js'

const productService = {}

productService.create = async (payload) => {
  try {
    let result = await productModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}
productService.updateOne = async (id, payload) => {
  try {
    let result = await productModel.findByIdAndUpdate({ _id: id }, payload)
    return result
  } catch (error) {
    throw error
  }
}
productService.getOne = async (id) => {
  try {
    let result = await productModel.findOne({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}
productService.getAll = async () => {
  try {
    let result = await productModel.find()
    return result
  } catch (error) {
    throw error
  }
}
productService.deleteOne = async (id) => {
  try {
    let result = await productModel.findByIdAndDelete({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}

export default productService
