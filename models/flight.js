import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: { type: String, default: " " },
  airport: { type: String, default: "DEN" },
  flightNo: { type: Number, default: " " },
  departs: {
    type: Date,
    required: true
  }

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