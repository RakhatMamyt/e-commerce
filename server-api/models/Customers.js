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
  avatar: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  phone: {
    type: Number,
    // required: true,
  },
  state: {
    type: String,
    // required: true,
  },
  watched: {
    type: String,
  },
  purchases: {
    type: String,
  },
  spent: {
    type: Number,
  },
});
// model
const Customers = mongoose.model('Customers', customerSchema);

module.exports = Customers;
