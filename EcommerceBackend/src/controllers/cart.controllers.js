import cartService from '../services/cart.services.js'

const cartController = {}

cartController.create = async (req, res) => {
  try {
    let result = await cartService.create(req.body)
    res.status(200).json({
      success: true,
      message: 'Cart Creation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Cart Creation Failed',
      data: error,
    })
  }
}

cartController.updateOne = async (req, res) => {
  try {
    let result = await cartService.updateOne(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'Cart Data Updatation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Cart Data Updatation Failed',
      data: error,
    })
  }
}

cartController.getOne = async (req, res) => {
  try {
    let result = await cartService.getOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Cart Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Cart Data RetrivationFailed',
      data: error,
    })
  }
}
cartController.getAll = async (req, res) => {
  try {
    let result = await cartService.getAll()
    res.status(200).json({
      success: true,
      message: 'Cart All Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Cart All Data Retrivation Failed',
      data: error,
    })
  }
}

cartController.deleteOne = async (req, res) => {
  try {
    let result = await cartService.deleteOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Cart Data Deletion Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Cart Data Deletion Failed',
      data: error,
    })
  }
}

export default cartController
