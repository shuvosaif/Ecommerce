import { number, object, string, boolean, date } from 'yup'

const orderSchema = {}

orderSchema.create = object().shape({
  taxRate: number().required('taxRate is Required!'),
  deliveryFee: number().required('DeliveryFee is Required!'),
  discount: number().required('discount is Required!'),
  subtotal: number().required('subtotal is Required!'),
  paymentMethod: string().required(' paymentMethod is Required!'),
  isPaid: boolean(),
  paidAt: date(),
  isDelivered: boolean(),
  deliveredAt: date(),
})
orderSchema.update = object().shape({
  taxRate: number().optional('taxRate is Required!'),
  deliveryFee: number().optional('DeliveryFee is Required!'),
  discount: number().optional('discount is Required!'),
  subtotal: number().optional('subtotal is Required!'),
  paymentMethod: string().optional(' paymentMethod is Required!'),
  isPaid: boolean().optional('paid Optional'),
  paidAt: date().optional('Paid Time Is optional'),
  isDelivered: boolean().optional('Delivered Status Is Optional'),
  deliveredAt: date().optional('Delivered Time is Optional'),
})
export default orderSchema
