const mongoose = require('mongoose');
//this is establishing our connection to the mongoose server
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cafe-clicker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;