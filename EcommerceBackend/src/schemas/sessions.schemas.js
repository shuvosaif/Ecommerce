import { number, object, string, boolean, date } from 'yup'
//import userConstant from '../constants/index.js'

const sessionSchema = {}

sessionSchema.create = object().shape({
  valid: boolean(),
  userAgent: string(),
})
sessionSchema.update = object().shape({
  valid: boolean(),
  userAgent: string(),
})
export default sessionSchema
