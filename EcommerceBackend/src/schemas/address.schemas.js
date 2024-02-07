import { number, object, string, boolean, date } from 'yup'

const addressSchema = {}

addressSchema.create = object().shape({
  title: string().required('Title is Required!'),
  addressLine: string().required('AddressLine is Required!'),
  postCode: string().required('PostCode is Required!'),
  city: string().required(' city is Required!'),
  country: string().required(' country is Required!'),
})
addressSchema.update = object().shape({
  title: string().required('Title is Required!'),
  addressLine: string().optional('AddressLine is Required!'),
  postCode: string().optional('PostCode is Required!'),
  city: string().optional(' city is Required!'),
  country: string().optional(' country is Required!'),
})
export default addressSchema
