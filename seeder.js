const mongoose = require('mongoose');
// const Booking = require('./booking');
// const Financial = require('./financial');
const User = require('./user')


// NoSQL Database (MongoDB Atlas)
mongoose.connect('mongodb+srv://jesrylbaguio:Jb.1234567@cluster0.rqpztnr.mongodb.net/API-Exercise')
  .then(() => {
    console.log('MongoDB connection open!!');
  })
  .catch(err => {
    console.log('MongoDB connection error');
    console.log(err);
  });

//!Booking Seeder Database
// const booking = new Booking({
//   name: "By the moon February 24, 2024",
//   address: "Moon",
//   bedrooms: 3,
//   bathrooms: 2,
//   guest: 2,
//   rate: 150,
//   description: "Moon lorem ipsum"
// });

// booking.save()
//   .then(savedBooking => {
//     console.log(savedBooking);
//     mongoose.connection.close(); // Close the MongoDB connection after saving
//   })
//   .catch(err => {
//     console.log(err);
//     mongoose.connection.close(); // Close the MongoDB connection on error
//   });

//!Financial Seeder Database
// const financial = new Financial({
//   total_booking: 3,
//   total_price: 400
// });

// financial.save()
//   .then(savedfinancial => {
//     console.log(savedfinancial);
//     mongoose.connection.close(); // Close the MongoDB connection after saving
//   })
//   .catch(err => {
//     console.log(err);
//     mongoose.connection.close(); // Close the MongoDB connection on error
//   });

//!User Seeder Database
// const user = new User({
//   name: "Jesryl Baguio",
//   address: "Talamban, Cebu City",
//   hometown: "Cebu City",
//   email: "jesrylbaguio@gmail.com",
//   phone: 639665772659,
//   gender: "Male",
//   marital_status: "Single"
// });

// user.save()
//   .then(savedUser => {
//     console.log(savedUser);
//     mongoose.connection.close(); // Close the MongoDB connection after saving
//   })
//   .catch(err => {
//     console.log(err);
//     mongoose.connection.close(); // Close the MongoDB connection on error
//   });