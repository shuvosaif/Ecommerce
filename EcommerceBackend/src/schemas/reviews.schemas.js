import { number, object, string } from 'yup'

const reviewSchema = {}

reviewSchema.create = object().shape({
  comment: string().required(' comment is Required!'),
  rating: number().required('rating is Required!'),
})
reviewSchema.update = object().shape({
  comment: string().optional(' comment is Required!'),
  rating: number().optional('rating is Required!'),
})
export default reviewSchema
