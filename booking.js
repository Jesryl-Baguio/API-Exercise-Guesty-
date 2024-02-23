const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  name:{
    type: String
  },
  address:{
    type: String
  },
  bedrooms:{
    type: Number
  },
  bathrooms:{
    type: Number
  },
  guest: {
    type: Number
  },
  rate : {
    type: Number
  },
  description: {
    type: String
  }
})

const Booking = mongoose.model('Bookings',bookingSchema);

module.exports = Booking;