const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carUserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    enum: ['IT', 'Sales', 'Unemployed'],
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('carUser', carUserSchema);
