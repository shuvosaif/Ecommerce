import createHttpError from 'http-errors'

const validateMiddleware = {}

validateMiddleware.validateRequest = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body)
    next()
  } catch (error) {
    next(createHttpError(422, error))
  }
}

export default validateMiddleware
