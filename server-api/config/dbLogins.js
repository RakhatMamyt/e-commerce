const mongoose = require('mongoose');
require('dotenv').config();

const initAndConnectDBLogins = () => {
  try {
    mongoose.connect(process.env.Logins_DB_URI, {
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
      console.log('Database Successfully Connected to Logins!');
    });
  } catch (err) {
    console.error(err.toString());
    process.exit(1);
  }
};

module.exports = initAndConnectDBLogins;
