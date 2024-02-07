import { number, object, string, boolean, date } from 'yup'

const shipperSchema = {}

shipperSchema.create = object().shape({
  name: string().required('Name is Required!'),
  contractName: string().required('contractName is Required!'),
  mobile: string().required('Mobile is Required!'),
})
shipperSchema.update = object().shape({
  name: string().required('Name is Required!'),
  contractName: string().optional('contractName is Required!'),
  mobile: string().optional('Mobile is Required!'),
})
export default shipperSchema
