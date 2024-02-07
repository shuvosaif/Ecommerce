import mongoose from 'mongoose'

const categorySchema = mongoose.Schema(
  {
    category: { type: String, required: true },
    image: { type: String, required: true },
    tag: [{ type: String, required: true }],
    productCount: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const categoryModel = mongoose.model('ecommerce_category', categorySchema)

export default categoryModel
