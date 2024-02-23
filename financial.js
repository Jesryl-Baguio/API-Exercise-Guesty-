const mongoose = require('mongoose')

const financialSchema = new mongoose.Schema({
  total_booking:{
    type: Number
  },
  total_price:{
    type: Number
  }
})

const Financial = mongoose.model('Financials',financialSchema);

module.exports = Financial;