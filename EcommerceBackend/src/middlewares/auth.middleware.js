import createHttpError from 'http-errors'
import jwt from 'jsonwebtoken'
import config from '../config/index.js'
import AuthService from '../services/auth.services.js'
import authUtils from '../utils/auth.utils.js'

const authMiddleware = {}

authMiddleware.authenticate = async (req, res, next) => {
  try {
    // Start  AccessToken Refresh Token Code
    // let { accessToken, refreshToken } = req.cookies
    // if (accessToken) {
    //   let decoded = jwt.verify(accessToken, config.secretKey)
    //   req.user = decoded
    //   next()
    //   return
    // }
    // if (!accessToken && refreshToken) {
    //   let decodedRef = jwt.verify(refreshToken, config.secretKey)
    //   let session = await AuthService.checkSession(decodedRef.session)
    //   let { user, _id } = session
    //   req.user = { ...user, session: _id }
    //   let access = jwt.sign({ ...user, session: _id }, config.secretKey, {
    //     expiresIn: config.acctoken,
    //   })
    //   let refresh = jwt.sign({ session: _id }, config.secretKey, {
    //     expiresIn: config.reftoken,
    //   })
    //   res.cookie('accessToken', access, {
    //     maxAge: config.acctoken,
    //     httpOnly: true,
    //   })
    //   res.cookie('refreshToken', refresh, {
    //     maxAge: config.reftoken,
    //     httpOnly: true,
    //   })
    //   next()
    //   return
    // }
    // next(createHttpError(401, 'Authentication Failed!'))
    //Upto AccessToken Refresh Token Code

    //Start Bearer Token
    let token = req.header('Authorization')
    console.log({ token })
    if (!token) {
      return next(createHttpError(401, 'Authentication Failed'))
    }

    const { decoded } = authUtils.jwtDecode(token)
    console.log({ decoded })

    if (!decoded?._id) {
      return next(createHttpError(401, 'Authentication Failed'))
    }
    req.user = decoded
    next()
    //Upto Bearer Token
  } catch (error) {
    console.log({ error })
    next(createHttpError(401, 'Authentication Failed!'))
  }
}

export default authMiddleware
