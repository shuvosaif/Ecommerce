import shipperService from '../services/shippers.services.js'

const shipperController = {}

shipperController.create = async (req, res) => {
  try {
    let data = req.body
    let result = await shipperService.create(data)
    res.status(200).json({
      success: true,
      message: 'Shipper Data Creation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Shipper Data Creation Failed',
      data: error,
    })
  }
}
shipperController.updateOne = async (req, res) => {
  try {
    let result = await shipperService.updateOne(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'Shipper Data Updatation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Shipper Data Updatation Failed',
      data: error,
    })
  }
}

shipperController.getOne = async (req, res) => {
  try {
    let result = await shipperService.getOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Shipper Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Shipper Data RetrivationFailed',
      data: error,
    })
  }
}
shipperController.getAll = async (req, res) => {
  try {
    let result = await shipperService.getAll()
    res.status(200).json({
      success: true,
      message: 'Shipper All Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Shipper All Data Retrivation Failed',
      data: error,
    })
  }
}

shipperController.deleteOne = async (req, res) => {
  try {
    let result = await shipperService.deleteOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Shipper Data Deletion Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Shipper Data Deletion Failed',
      data: error,
    })
  }
}

export default shipperController
