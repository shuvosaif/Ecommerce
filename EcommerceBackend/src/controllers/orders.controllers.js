import orderService from '../services/orders.services.js'

const orderController = {}

orderController.create = async (req, res) => {
  try {
    console.log(req.body)
    let result = await orderService.create(req.body)
    res.status(200).json({
      success: true,
      message: 'Order Creation Successfull',
      data: result,
    })
  } catch (error) {
    console.log(error)
    res.status(401).json({
      success: false,
      message: 'Order Creation Failed',
      data: error,
    })
  }
}

orderController.updateOne = async (req, res) => {
  try {
    let result = await orderService.updateOne(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'Order Data Updatation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Order Data Updatation Failed',
      data: error,
    })
  }
}

orderController.getOne = async (req, res) => {
  try {
    let result = await orderService.getOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Order Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Order Data RetrivationFailed',
      data: error,
    })
  }
}
orderController.getAll = async (req, res) => {
  try {
    let result = await orderService.getAll()
    res.status(200).json({
      success: true,
      message: 'Order All Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Order All Data Retrivation Failed',
      data: error,
    })
  }
}

orderController.deleteOne = async (req, res) => {
  try {
    let result = await orderService.deleteOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Order Data Deletion Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Order Data Deletion Failed',
      data: error,
    })
  }
}

export default orderController
