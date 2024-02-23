const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name:{
    type: String
  },
  address:{
    type: String
  },
  hometown: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  gender: {
    type: String
  },
  marital_status: {
    type: String
  }
})

const User = mongoose.model('Users',userSchema);

module.exports = User;