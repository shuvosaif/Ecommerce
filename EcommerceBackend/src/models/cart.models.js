import mongoose from 'mongoose'

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'ecommerce_user',
      required: true,
    },
    product: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'ecommerce_product',
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const cartModel = mongoose.model('ecommerce_cart', cartSchema)

export default cartModel
