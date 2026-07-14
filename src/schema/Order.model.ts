import mongoose, { Schema } from 'mongoose';
import { OrderStatus } from '../libs/enums/order.enum';

const orderSchema = new Schema(
  {
    orderTotal: { type: Number, ruqiured: true },

    orderDelivery: {
      type: Number,
      required: true,
    },

    orderStatus: {
      type: String,
      enum: OrderStatus.PAUSE,
    },

    memberId: {
      type: Schema.Types.ObjectId,
      reuqired: true,
      ref: 'Member',
    },
  },
  { timestamps: true },
);

export default mongoose.model('Order', orderSchema);
