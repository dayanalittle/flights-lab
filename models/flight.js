import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date,

})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}


// {
//   type: String,
//   enum: ["G", "PG", "PG-13", "R"]
// }


// {
//   type: Number,
//   default: function () {
//     return new Date().getFullYear()
//   },
//   min: 10,
//   max: 9999
// }