import addressService from '../services/address.services.js'

const addressController = {}

addressController.create = async (req, res) => {
  try {
    let data = req.body
    let result = await addressService.create(data)
    res.status(200).json({
      success: true,
      message: 'Address Data Creation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Address Data Creation Failed',
      data: error,
    })
  }
}
addressController.updateOne = async (req, res) => {
  try {
    let result = await addressService.updateOne(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'Address Data Updatation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Address Data Updatation Failed',
      data: error,
    })
  }
}

addressController.getOne = async (req, res) => {
  try {
    let result = await addressService.getOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Address Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Address Data RetrivationFailed',
      data: error,
    })
  }
}
addressController.getAll = async (req, res) => {
  try {
    let result = await addressService.getAll()
    res.status(200).json({
      success: true,
      message: 'Address All Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Address All Data Retrivation Failed',
      data: error,
    })
  }
}

addressController.deleteOne = async (req, res) => {
  try {
    let result = await addressService.deleteOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Address Data Deletion Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Address Data Deletion Failed',
      data: error,
    })
  }
}

export default addressController
