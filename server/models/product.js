const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  case: {
    type: String,
    required: true,
  },
  motherboard: {
    type: String,
    required: true,
  },
  cpu: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
    required: true,
  },
  storage: {
    type: String,
    required: true,
  },
  gpu: {
    type: String,
    required: true,
  },
  psu: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  reviewLink: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = Product = mongoose.model("product", productSchema);
