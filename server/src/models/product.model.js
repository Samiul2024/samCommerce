const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
  size: String, // 250g, 500g, 1kg
  price: Number,
  stock: Number,
});

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: String,

    image: String,

    category: String,

    price: Number,

    variants: [variantSchema],

    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);