const restaurants = require('express').Router()
const db = require('../models')
const { Restaurants } = db

//INDEX
restaurants.get('/', async (req, res) => {
    try {
        const foundRestaurants = await Restaurants.findAll()
        res.status(200).json({foundRestaurants})
    } catch (error) {
        res.status(500).json(error)
    }
})

//SHOW
restaurants.get('/:id', async (req, res) => {
    try {
        const foundRestaurants = await Restaurants.findOne({
            where: { rest_id: req.params.id }
        })
        res.status(200).json(foundRestaurants)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE
restaurants.post('/', async (req, res) => {
    try {
        const newRestaurant = await Restaurants.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new store',
            data: newRestaurant
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//Update
restaurants.put('/:id', async (req, res) => {
    try {
        const updateRestaurant = await Restaurants.update(req.body, {
            where: {
                rest_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updates ${updateRestaurant} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//DELETE
restaurants.delete('/:id', async (req, res) => {
    try {
        const deleteRestaurant = await Restaurants.destroy({
            where: {
                rest_id: req.params.id
            }
        })
        res.status(500).json({
            message: `Successfully deleted ${deleteRestaurant} user(s)`
        })
    } catch(err) {
        res.status(200).json(err)
    }
})

module.exports = restaurants