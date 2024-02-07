import mongoose from 'mongoose'

const wishlistSchema = mongoose.Schema(
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

const wishlistModel = mongoose.model('ecommerce_wishlist', wishlistSchema)

export default wishlistModel
