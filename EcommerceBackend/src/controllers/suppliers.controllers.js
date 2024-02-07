import supplierService from '../services/suppliers.services.js'

const supplierController = {}

supplierController.create = async (req, res) => {
  try {
    let data = req.body
    let result = await supplierService.create(data)
    res.status(200).json({
      success: true,
      message: 'Supplier Data Creation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Supplier Data Creation Failed',
      data: error,
    })
  }
}
supplierController.updateOne = async (req, res) => {
  try {
    let result = await supplierService.updateOne(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'Supplier Data Updatation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Supplier Data Updatation Failed',
      data: error,
    })
  }
}

supplierController.getOne = async (req, res) => {
  try {
    let result = await supplierService.getOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Supplier Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Supplier Data RetrivationFailed',
      data: error,
    })
  }
}
supplierController.getAll = async (req, res) => {
  try {
    let result = await supplierService.getAll()
    res.status(200).json({
      success: true,
      message: 'Supplier All Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Supplier All Data Retrivation Failed',
      data: error,
    })
  }
}

supplierController.deleteOne = async (req, res) => {
  try {
    let result = await supplierService.deleteOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Supplier Data Deletion Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Supplier Data Deletion Failed',
      data: error,
    })
  }
}

export default supplierController
