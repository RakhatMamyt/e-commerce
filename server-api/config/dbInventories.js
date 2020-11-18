const mongoose = require('mongoose');
require('dotenv').config();

const initAndConnectDBInventories = () => {
  try {
    mongoose.connect(process.env.inventories_DB_URI, {
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
      console.log('Database Successfully Connected to Inventories!');
    });
  } catch (err) {
    console.error(err.toString());
    process.exit(1);
  }
};

module.exports = initAndConnectDBInventories;
