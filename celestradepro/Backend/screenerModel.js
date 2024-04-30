const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Screener = new Schema({

  high:{
    type: String
   },
   low:{
    type: String
   },
   price:{
    type: String
   },


}, {
  collection: 'screener'
})

module.exports = mongoose.model('Screener', Screener)
