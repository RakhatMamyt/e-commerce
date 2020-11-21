const mongoose = require('mongoose');

// schema
const customerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    // required: true,
  },
  billingAddress: {
    type: String,
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  watchList: [
    {
      type: String,
    },
  ],
  cartList: {
    productId: { type: String },
    quantity: { type: Number },
  },
  purchaseHistory: [
    {
      date: { type: String },
      items: [
        {
          productId: { type: String },
          quantity: { type: Number },
        },
      ],
    },
  ],
});
// model
const Customers = mongoose.model('Customers', customerSchema);

module.exports = Customers;
