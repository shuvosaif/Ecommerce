import { number, object, string, boolean, date } from 'yup'

const supplierSchema = {}

supplierSchema.create = object().shape({
  name: string().required('Title is Required!'),
  contractName: string().required('AddressLine is Required!'),
  mobile: string().required('PostCode is Required!'),
})
supplierSchema.update = object().shape({
  name: string().required('Title is Required!'),
  contractName: string().optional('AddressLine is Required!'),
  mobile: string().optional('PostCode is Required!'),
})
export default supplierSchema
