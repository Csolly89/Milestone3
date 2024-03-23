const reservations = require('express').Router()
const db = require('../models')
const { Reservations } = db

//INDEX
reservations.get('/', async (req, res) => {
    try {
        const foundReservations = await Reservations.findAll()
        res.status(200).json({foundReservations})
    } catch (error){
        res.status(500).json(error)
    }
})

//SHOW
reservations.get('/:id', async (req, res) => {
    try {
        const foundReservations = await Reservations.findOne({
            where: { res_id: req.params.id }
        })
        res.status(200).json(foundReservations)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE
reservations.post('/', async (req, res) => {
    try {
        const newRes = await Reservations.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new reservation',
            data: newRes
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//Update
reservations.put('/:id', async (req, res) => {
    try {
        const updateReservation = await Reservations.update(req.body, {
            where: {
                res_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updates ${updateReservation} reservation`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//DELETE
reservations.delete('/:id', async (req, res) => {
    try {
        const deleteRes = await Reservations.destroy({
            where: {
                res_id: req.params.id
            }
        })
        res.status(500).json({
            message: `Successfully deleted ${deleteRes} reservation`
        })
    } catch(err) {
        res.status(200).json(err)
    }
})

module.exports = reservations