// DEPENDENCIES

const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')

// CONFIGURATION / MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Sizzle House'
    })
})

//controllers
const usersController = require("./controllers/users_controller")
app.use('/users', usersController)

const reservationController = require("./controllers/reservations_controller")
app.use('/reservations', reservationController)

const restaurantsController = require("./controllers/restaurants_contoller")
app.use('/restaurants', restaurantsController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})