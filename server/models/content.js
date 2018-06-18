const mongoose = require('mongoose');
//var bcrypt = require('bcryptjs');

// User Schema
const ContentSchema = mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  displayDate: {
    type: Date,
    // required: true
  },
  expiryDate: {
    type: Date,
    // required: true
  },
  content: {
    type: String,
  }
});

const Content = module.exports = mongoose.model('Content', ContentSchema);
