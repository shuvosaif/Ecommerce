import mongoose from 'mongoose'
import { number } from 'yup'

const usersSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female'] },
    bloodGroup: {
      type: String,
      enum: ['a+', 'a-', 'b+', 'b-', 'ab+', 'ab', 'ab-', 'o+', 'o-'],
    },
    age: { type: Number, min: 1, max: 80 },
    address: { type: String },
    postcode: { type: Number },
    roles: { type: String },
    status: { type: Boolean, default: true },
    dob: { type: String },
    avatar: { type: String }, // Not Necessary To Upload in first attemp thats why it is not required
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const usersModel = mongoose.model('ecommerce_user', usersSchema)

export default usersModel
