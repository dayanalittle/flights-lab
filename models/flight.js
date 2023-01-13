import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: { type: String, match: /[A-F][1-9]\d?/ },
  price: { type: Number, min: 0 }
}, {
  timestamps: true
})




const flightSchema = new Schema({
  airline:
    { type: String, 
      default: " ", 
      enum: ['United', 'Southwest', 'American'] },
  airport: {
    type: String,
    default: "DEN", 
    enum: ['DEN', 'AUS', 'DFW', 'LAX', 'SAN']
  },
  flightNo: {
    type: Number,
    default: " ",
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    required: true,
  },
  tickets: [ticketSchema],
  

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