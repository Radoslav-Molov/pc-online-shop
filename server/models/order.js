const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  uid: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Order = mongoose.model("order", orderSchema);
