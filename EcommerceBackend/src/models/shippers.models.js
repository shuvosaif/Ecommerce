import mongoose from 'mongoose'

const shipperSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    contractName: { type: String, required: true },
    mobile: [{ type: String, required: true }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const shipperModel = mongoose.model('ecommerce_shipper', shipperSchema)

export default shipperModel
