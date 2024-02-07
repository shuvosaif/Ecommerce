import { number, object, string, boolean, date } from 'yup'
//import userConstant from '../constants/index.js'

const productSchema = {}

productSchema.create = object().shape({
  reviewCount: number().required('Review Count is Required!'),
  rating: number().required('Rating is Required!'),
  tags: string().required('Tags is Required!'),
  name: string().required('Name is Required!'),
  description: string().required('Brand is Required!'),
  brand: string().required('Brand is Required!'),
  price: number().required('Price is Required!'),
  discount: number().required('Discount is Required!'),
  countInStock: number().optional('Count In Stock is Optional!'),
})
productSchema.update = object().shape({
  reviewCount: number().optional('Review Count is Required!'),
  rating: number().optional('Rating is Required!'),
  name: string().optional('Name is Required!'),
  brand: string().optional('Brand is Required!'),
  tags: string().optional('Tags is Optional'),
  description: string().optional('Description is Optional!'),
  price: number().optional('Price is Required!'),
  discount: number().optional('Discount is Required!'),
  countInStock: number().optional('Count In Stock is Optional!'),
})
export default productSchema
