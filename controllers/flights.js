import { Flight } from "../models/flight.js"




function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight",
  })
}

function create(req, res) {
  Flight.create(req.body)
    .then(flight => {
      res.redirect('/flights/${flight._id}')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/flights')
    })
}

function index(req, res) {
  Flight.find({})
    .then(flights => {
      res.render('flights/index', {
        flights,
        title: "All Flights",
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
}






export {
  newFlight as new,
  create,
  index
}