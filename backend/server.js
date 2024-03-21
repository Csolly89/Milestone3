// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



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


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})