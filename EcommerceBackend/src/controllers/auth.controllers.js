import userService from '../services/users.services.js'
import authService from '../services/auth.services.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import AuthUtils from '../utils/auth.utils.js'

const authController = {}

authController.register = async (req, res) => {
  try {
    let data = req.body
    data.password = await bcrypt.hash(data.password, 10)
    // data.avatar = req.file.filename
    let result = await userService.register(data)
    res.status(200).json({
      success: true,
      message: 'User Registration Successful',
      data: result,
    })
  } catch (error) {
    console.log({ error })
    res.status(401).json({
      success: false,
      message: 'User Registration Failed',
      data: error,
    })
  }
}

authController.login = async (req, res) => {
  try {
    let user = await authService.login(req.body.email, req.body.password)
    if (user) {
      let token = AuthUtils.jwtEncode(user)
      res.status(200).json({
        success: true,
        message: 'User Login Successfull',
        data: user,
        token: token,
      })
    }
  } catch (error) {
    console.log(error)
    res.status(401).json({
      success: false,
      message: 'User Login Failed',
      data: error,
    })
  }
}
export default authController
