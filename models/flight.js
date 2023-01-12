import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: 
    { type: String, default: " " },
  enum: ['United', 'Southwest', 'American'],
  
  airport: { type: String, default: "DEN" },
  enum: ['DEN', 'AUS', 'DFW', 'LAX', 'SAN'],
  flightNo: { type: Number, default: " ", required: true,min: 10, max: 9999},
  departs: {
    type: Date,
    required: true,
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