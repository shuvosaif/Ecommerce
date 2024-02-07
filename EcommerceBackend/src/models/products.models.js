import { Types, model, Schema } from 'mongoose'
//import userConstant from '../constants/index.js'

const productSchema = Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: 'ecommerce_user',
      required: true,
    },
    supplier: {
      type: Types.ObjectId,
      ref: 'ecommerce_supplier',
      required: true,
    },
    category: {
      type: Types.ObjectId,
      ref: 'ecommerce_category',
      required: true,
    },
    reviews: [
      {
        type: Types.ObjectId,
        ref: 'ecommerce_review',
      },
    ],
    reviewCount: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    tags: [{ type: String }],
    name: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    countInStock: { type: Number, default: 0 },
    image: [{ type: String }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const productModel = model('ecommerce_product', productSchema)

export default productModel
