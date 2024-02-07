import usersModel from '../models/users.models.js'
import bcrypt from 'bcrypt'
import sessionModel from '../models/sessions.model.js'

const authService = {}

authService.login = async (username, password) => {
  try {
    let user = await usersModel.findOne({ email: username }).lean()
    if (!user) throw new Error('User Not Found!')

    let matchPass = await bcrypt.compare(password, user.password)

    if (matchPass)
      return {
        _id: user._id,
        username: user.email,
        name: user.name,
        password: user.password,
      }

    //return matchPass
    throw new Error('password NOt matched!')
  } catch (error) {
    console.log({ error })
    throw new Error('Failed To Login')
  }
}

authService.createSession = async (userID, userAgent) => {
  try {
    let session = await sessionModel.create({
      user: userID,
      userAgent: userAgent,
    })
    return session
  } catch (error) {
    throw error
  }
}

authService.checkSession = async (sessionID) => {
  try {
    let session = await sessionModel
      .findOne(
        {
          _id: sessionID,
          valid: true,
        },
        '_id'
      )
      .populate({ path: 'user', select: '_id name username' })
      .lean()

    return session ? session : new Error('Authentication Failed!')
  } catch (error) {
    throw error
  }
}

export default authService
