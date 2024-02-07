import mongoose from 'mongoose'

const supplierSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    contractName: { type: String, required: true },
    mobile: [{ type: String, required: true }],
    address: {
      type: mongoose.Types.ObjectId,
      ref: 'ecommerce_address',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const supplierModel = mongoose.model('ecommerce_supplier', supplierSchema)

export default supplierModel
