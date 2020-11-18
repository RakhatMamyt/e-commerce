const express = require('express');
const initAndConnectDBCustomers = require('./config/dbCustomers');
const initAndConnectDBInventories = require('./config/dbInventories');
const initAndConnectDBLogins = require('./config/dbLogins');
const routerCustomers = require('./api/routeCustomers');

const app = express();

const PORT = process.env.PORT || 2000;

// db
initAndConnectDBCustomers();
initAndConnectDBInventories();
initAndConnectDBLogins();

// middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Earthy Being');
});

app.use('/api', routerCustomers);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
