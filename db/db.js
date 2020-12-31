const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/betaviz';
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;

module.exports = db;