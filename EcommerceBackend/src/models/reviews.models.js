import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'ecommerce_user',
      required: true,
    },
    comment: { type: String },
    rating: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const reviewModel = mongoose.model('ecommerce_review', reviewSchema)

export default reviewModel
