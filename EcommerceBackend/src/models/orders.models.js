import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'ecommerce_user',
      required: true,
    },
    orderItems: [
      { type: mongoose.Types.ObjectId, ref: 'ecommerce_product', required: true },
    ],
    shippingAddress: {
      type: mongoose.Types.ObjectId,
      ref: 'ecommerce_address',
      required: true,
    },
    shipper: {
      type: mongoose.Types.ObjectId,
      ref: 'ecommerce_shipper',
      required: true,
    },
    supplier: {
      type: mongoose.Types.ObjectId,
      ref: 'ecommerce_supplier',
      required: true,
    },
    taxRate: { type: Number, required: true },
    deliveryFee: { type: Number, required: true },
    discount: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    isPaid: { type: Boolean },
    paidAt: { type: Date },
    isDelivered: { type: Boolean },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const orderModel = mongoose.model('ecommerce_order', orderSchema)

export default orderModel
