import { boolean, number, object, string } from 'yup'
import userConstant from '../constant/index.js'

const userSchema = {}

userSchema.create = object().shape({
  name: string().required(' Name is Required!'),
  email: string().required('email is Required!'),
  password: string().required('password is Required!'),
  gender: string().required('gender is Required!'),
  bloodGroup: string().required('bloodGroup is Required!'),
  age: number(),
  address: string().required('address is Required!'),
  //no need to check status bcz it is by default true when a user is created
  postcode: number(),
  roles: string(),
  dob: string(),
  //no need to check avatar string from schema since it does not contain in request body
})
userSchema.update = object().shape({
  name: string().optional(' Name is Required!'),
  email: string().optional('email is Required!'),
  mobile: string().optional('mobile is Required!'),
  address: string().optional('Address is Required!'),
  postcode: number().optional('Postcode is Required!'),
  dob: string().optional('status is Required!'),
})
export default userSchema

//get All Schema validation
// .shape({
//   search: string().typeError('Search Value Should be String!'),
//   page: string().optional().matches(numberExp, 'Invalid Page!'),
//   limit: string().optional().matches(numberExp, 'Invalid Limit!'),
//   sortOrder: string()
//     .optional()
//     .oneOf(['asc', 'desc'], 'Invalid sortOrder Value!'),
//   sortBy: string()
//     .optional()
//     .oneOf(UserConst.sortOptions, 'Invalid SortBy Value!'),

//   // filter Options
//   type: string().optional().oneOf(UserConst.userType, 'Invalid User Type'),
//   active: string()
//     .optional()
//     .oneOf(['true', 'false'], 'Invalid Active Value'),
// })
//End Of Get All Schema
