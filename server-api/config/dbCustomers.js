const mongoose = require('mongoose');
require('dotenv').config();

const initAndConnectDBCustomers = () => {
  try {
    mongoose.connect(process.env.customers_DB_URI, {
      auth: {
        authSource: 'admin',
      },
      user: 'admin',
      pass: 'password',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
      console.log('Database Successfully Connected to Customers!');
    });
  } catch (err) {
    console.error(err.toString());
    process.exit(1);
  }
};

module.exports = initAndConnectDBCustomers;
