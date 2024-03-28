const users = require('express').Router()
const db = require('../models')
const { Users } = db

//INDEX
users.get('/', async (req, res) => {
    try {
        const foundUsers = await Users.findAll()
        return res.status(200).send({foundUsers})
    } catch (error) {
        return res.status(500).send(error)
    }
})

//SHOW
users.get('/:id', async (req, res) => {
    try {
        const foundUsers = await Users.findOne({
            where: {
                 user_id: req.params.id 
                }
        })
        res.status(200).send(foundUsers)
    } catch (error) {
        res.status(500).send(error)
    }
})


//CREATE
users.post('/', async (req, res) => {
    try {
        const newUser = await Users.create(req.body)
        res.status(200).send({
            message: 'Successfully inserted a new user',
            data: newUser
        })
    } catch(err) {
        res.status(500).send(err)
    }
})

//Update
users.put('/:id', async (req, res) => {
    try {
        const updateUser = await Users.update(req.body, {
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).send({
            message: `Successfully updates ${updateUser} user(s)`
        })
    } catch(err) {
        res.status(500).send(err)
    }
})

//DELETE
users.delete('/:id', async (req, res) => {
    try {
        const deleteUser = await Users.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).send({
            message: `Successfully deleted ${deleteUser} user(s)`
        })
    } catch(err) {
        res.status(500).send(err)
    }
})

module.exports = users