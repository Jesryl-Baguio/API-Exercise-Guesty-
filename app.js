const express = require('express');
const app = express();
const mongoose = require('mongoose');

const Booking = require('./booking');
const Financial = require('./financial');
const User = require('./user');

const PORT = 3000;

// Middleware
app.use(express.json()); // for parsing JSON request bodies
app.use(express.urlencoded({ extended: true })); // for parsing URL-encoded request bodies

// NoSQL Database (Mongodb Atlas)
mongoose
  .connect('mongodb+srv://jesrylbaguio:Jb.1234567@cluster0.rqpztnr.mongodb.net/API-Exercise')
  .then(() => {
    console.log('mongoDB connection open!!');
  })
  .catch((err) => {
    console.log('mongoDB connection error');
    console.log(err);
  });

// Middleware to authenticate token
const cid = "0oafashkaqJQDKi7B5d7";
const tokenid = "t_S3BDKkpE2y1hLSl4KPr3jsISFXksJLnqSkc3HokTQSoI3nq3FWfMX9_FlS2l8-";

function authenticateToken(req, res, next) {
  const clientId = req.headers['client-id'];
  const token = req.headers['token'];

  if (clientId !== cid || token !== tokenid) {
    return res.sendStatus(401);
  }

  next();
}

// Endpoint routes

// GET REQUEST
app.get('/', (req, res) => {
  res.send('Welcome to Online Booking Exercise created by Jesryl Baguio');
});

// Schema booking to Database
app.get('/bookings', authenticateToken, async (req, res) => {
  try {
    const allBookings = await Booking.find({});
    res.json(allBookings);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

// Schema Financial to Database
app.get('/financials', authenticateToken, async (req, res) => {
  try {
    const allFinancials = await Financial.find({});
    res.json(allFinancials);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

// Schema User to Database
app.get('/users', authenticateToken, async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

// POST REQUEST
app.post('/bookings', authenticateToken, async (req, res) => {
  try {
    const newBooking = await Booking.create(req.body);
    res.status(201).json(newBooking);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/users', authenticateToken, async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

// PORT
app.listen(PORT, () => console.log(`Server is running Port:${PORT}`));