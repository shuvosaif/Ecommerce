import sessionService from './../services/sessions.services.js'

const sessionController = {}

sessionController.create = async (req, res) => {
  try {
    let data = req.body
    let result = await sessionService.create(data)
    res.status(200).json({
      success: true,
      message: 'Session Creation Successfull',
      data: result,
    })
  } catch (error) {
    console.log(error)
    res.status(401).json({
      success: false,
      message: 'Session Creation Failed',
      data: error,
    })
  }
}

sessionController.updateOne = async (req, res) => {
  try {
    let result = await sessionService.updateOne(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'Session Data Updatation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Session Data Updatation Failed',
      data: error,
    })
  }
}

sessionController.getOne = async (req, res) => {
  try {
    let result = await sessionService.getOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Session Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Session Data RetrivationFailed',
      data: error,
    })
  }
}
sessionController.getAll = async (req, res) => {
  try {
    let result = await sessionService.getAll()
    res.status(200).json({
      success: true,
      message: 'Session All Data Retrivation Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Session All Data Retrivation Failed',
      data: error,
    })
  }
}

sessionController.deleteOne = async (req, res) => {
  try {
    let result = await sessionService.deleteOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Session Data Deletion Successfull',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Session Data Deletion Failed',
      data: error,
    })
  }
}

export default sessionController
