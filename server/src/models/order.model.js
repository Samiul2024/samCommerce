const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: [
        "cod",
        "bkash",
        "nagad",
        "sslcommerz",
      ],
      default: "cod",
    },

    items: [
      {
        productId: String,
        title: String,
        image: String,
        size: String,
        quantity: Number,
        price: Number,
      },
    ],

    totalAmount: Number,

    orderStatus: {
      type: String,
      enum: [
        "pending",
        "processing",
        "shipped",
        "delivered",
      ],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Order",
  orderSchema
);