const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.MONGODB_URI);

db.on('connected', () => console.log('Connect'));
db.on('error', (err) => console.log(err.message, 'Failed to connect'));