import mongoose from 'mongoose'
import { string } from 'yup'

const addressSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    addressLine: { type: String, required: true },
    postCode: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const addressModel = mongoose.model('ecommerce_address', addressSchema)

export default addressModel
