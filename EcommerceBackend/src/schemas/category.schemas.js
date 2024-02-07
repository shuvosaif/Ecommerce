import { number, object, string, boolean, date } from 'yup'
//import userConstant from '../constants/index.js'

const CategorySchema = {}

CategorySchema.create = object().shape({
  category: string().required('Category is Required!'),
  tag: string().optional('Tags is Required!'),
})
CategorySchema.update = object().shape({
  category: string().optional('Category is Required!'),
  tag: string().optional('Tags is Required!'),
})
export default CategorySchema
