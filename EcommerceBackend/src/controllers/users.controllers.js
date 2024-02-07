import usersService from '../services/users.services.js'

const create = async (req, res, next) => {
  try {
    let data = req.body
    console.log(data)
    let result = await usersService.create(data)
    res.status(200).json({
      success: true,
      message: 'Data Inserted Successfully',
      data: result,
    })
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Data Insertion Failed',
      data: error.message,
    })
  }
}

const update = async (req, res, next) => {
  try {
    let data = req.body
    let id = req.params.id
    let result = await usersService.update(data, id)
    res.status(200).json({
      success: true,
      message: 'Data Updated Successfully',
      data: result,
    })
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Data Update Failed',
      data: error.message,
    })
  }
}
const getAll = async (req, res, next) => {
  try {
    // let data = req.body
    // let id = req.params.id
    let result = await usersService.getAll()
    res.status(200).json({
      success: true,
      message: 'Data Retrieved Successfully',
      data: result,
    })
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Data Retrivation Failed',
      data: error.message,
    })
  }
}

const getOne = async (req, res, next) => {
  try {
    // let data = req.body
    let id = req.params.id
    let result = await usersService.getOne(id)
    res.status(200).json({
      success: true,
      message: 'Single Data Retrieved Successfully',
      data: result,
    })
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Single Data Retrivation Failed',
      data: error.message,
    })
  }
}

const deleteOne = async (req, res, next) => {
  try {
    // let data = req.body
    let id = req.params.id
    let result = await usersService.deleteOne(id)
    res.status(200).json({
      success: true,
      message: 'Single Data Deleted Successfully',
      data: result,
    })
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Single Data Deletion Failed',
      data: error.message,
    })
  }
}

const usersController = {
  create,
  update,
  getAll,
  getOne,
  deleteOne,
}

export default usersController
