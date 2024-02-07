import DeviceDetector from 'node-device-detector'
import Jwt from 'jsonwebtoken'
import config from '../config/index.js'

const authUtils = {}

authUtils.jwtEncode = (payload) => {
  try {
    let token = Jwt.sign(payload, config.secretKey, {
      expiresIn: config.expireTime,
    })
    return token
  } catch (error) {
    throw error
  }
}

authUtils.jwtDecode = (token) => {
  try {
    let decoded = Jwt.verify(token, config.secretKey)
    return { valid: true, expired: false, decoded }
  } catch (error) {
    throw {
      valid: false,
      expired: error.message === 'jwt expired',
      decoded: false,
    }
  }
}

export default authUtils
