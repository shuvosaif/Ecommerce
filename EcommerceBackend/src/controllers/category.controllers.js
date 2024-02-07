import categoryService from '../services/category.services.js'

const categoryController = {}

categoryController.create = async (req, res) => {
  try {
    let data = req.body
    // if (req.file.filename) {
    //   data.image = req.file.filename
    // }
    let result = await categoryService.create(data)
    res.status(200).json({
      success: true,
      message: 'Category Creation Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Category Creation Failed',
      data: error,
    })
  }
}

categoryController.updateOne = async (req, res) => {
  try {
    let result = await categoryService.updateOne(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'Category Data Updatation Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Category Data Updatation Failed',
      data: error,
    })
  }
}

categoryController.getOne = async (req, res) => {
  try {
    let result = await categoryService.getOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Category Data Retrivation Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Category Data Retrivation Failed',
      data: error,
    })
  }
}
categoryController.getAll = async (req, res) => {
  try {
    let result = await categoryService.getAll()
    res.status(200).json({
      success: true,
      message: 'Category All Data Retrivation Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Category All Data Retrivation Failed',
      data: error,
    })
  }
}

categoryController.deleteOne = async (req, res) => {
  try {
    let result = await categoryService.deleteOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Category Data Deletion Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Category Data Deletion Failed',
      data: error,
    })
  }
}

export default categoryController
