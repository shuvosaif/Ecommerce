import wishlistService from '../services/wishlists.services.js'

const wishlistController = {}

wishlistController.create = async (req, res) => {
  try {
    let data = req.body
    let result = await wishlistService.create(data)
    res.status(200).json({
      success: true,
      message: 'wishlist Data Creation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'wishlist Data Creation Failed',
      data: error,
    })
  }
}
wishlistController.updateOne = async (req, res) => {
  try {
    let result = await wishlistService.updateOne(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'wishlist Data Updatation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'wishlist Data Updatation Failed',
      data: error,
    })
  }
}

wishlistController.getOne = async (req, res) => {
  try {
    let result = await wishlistService.getOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'wishlist Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'wishlist Data RetrivationFailed',
      data: error,
    })
  }
}
wishlistController.getAll = async (req, res) => {
  try {
    let result = await wishlistService.getAll()
    res.status(200).json({
      success: true,
      message: 'wishlist All Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'wishlist All Data Retrivation Failed',
      data: error,
    })
  }
}

wishlistController.deleteOne = async (req, res) => {
  try {
    let result = await wishlistService.deleteOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'wishlist Data Deletion Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'wishlist Data Deletion Failed',
      data: error,
    })
  }
}

export default wishlistController
