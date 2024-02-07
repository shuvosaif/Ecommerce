import productService from './../services/products.services.js'

const productController = {}

productController.create = async (req, res) => {
  try {
    let data = req.body
    console.log(req.file)
    if (req.file.filename) {
      data.image = req.file.filename
    }
    let result = await productService.create(data)

    res.status(200).json({
      success: true,
      message: 'Product Creation Successfull',
      data: result,
    })
  } catch (error) {
    console.log(error)
    res.status(401).json({
      success: false,
      message: 'Product Creation Failed',
      data: error,
    })
  }
}

productController.updateOne = async (req, res) => {
  try {
    let result = await productService.updateOne(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'Product Data Updatation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Product Data Updatation Failed',
      data: error,
    })
  }
}

productController.getOne = async (req, res) => {
  try {
    let result = await productService.getOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Product Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Product Data RetrivationFailed',
      data: error,
    })
  }
}
productController.getAll = async (req, res) => {
  try {
    let result = await productService.getAll()
    res.status(200).json({
      success: true,
      message: 'Product All Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Product All Data Retrivation Failed',
      data: error,
    })
  }
}

productController.deleteOne = async (req, res) => {
  try {
    let result = await productService.deleteOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Product Data Deletion Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Product Data Deletion Failed',
      data: error,
    })
  }
}

export default productController
