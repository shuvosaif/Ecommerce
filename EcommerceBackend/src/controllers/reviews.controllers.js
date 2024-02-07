import reviewService from '../services/reviews.services.js'

const reviewController = {}

reviewController.create = async (req, res) => {
  try {
    let data = req.body
    let result = await reviewService.create(data)
    res.status(200).json({
      success: true,
      message: 'Review Data Creation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Review Data Creation Failed',
      data: error,
    })
  }
}
reviewController.updateOne = async (req, res) => {
  try {
    let result = await reviewService.updateOne(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'Review Data Updatation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Review Data Updatation Failed',
      data: error,
    })
  }
}

reviewController.getOne = async (req, res) => {
  try {
    let result = await reviewService.getOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Review Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Review Data RetrivationFailed',
      data: error,
    })
  }
}
reviewController.getAll = async (req, res) => {
  try {
    let result = await reviewService.getAll()
    res.status(200).json({
      success: true,
      message: 'Review All Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Review All Data Retrivation Failed',
      data: error,
    })
  }
}

reviewController.deleteOne = async (req, res) => {
  try {
    let result = await reviewService.deleteOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Review Data Deletion Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Review Data Deletion Failed',
      data: error,
    })
  }
}

export default reviewController
