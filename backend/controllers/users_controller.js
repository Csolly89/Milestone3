const users = require('express').Router()
const db = require('../models')
const { createToken } = require('../utils/authUtils')
const { Users } = db

users.post('/login', async(req,res) => {
    //this is the user login function
    try {
        const foundUser = await Users.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!foundUser)
            return res.status(404).send({error: 'User not found'});

        if (!foundUser.checkPassword(req.body.passwrd))
            return res.status(400).send({error: 'Wrong passowrd'});

        const accessToken = createToken(foundUser.email, foundUser.id);
        
        return res.status(200).send({
            user: foundUser,
            accessToken
        })
    } catch(e){
        res.status(500).send({errors: e.message})
    }
})

//INDEX
users.get('/', async (req, res) => {
    try {
        const foundUsers = await Users.findAll()
        res.status(200).json({foundUsers})
    } catch (error) {
        res.status(500).json(error)
    }
})

//SHOW
users.get('/:id', async (req, res) => {
    try {
        const foundUsers = await Users.findOne({
            where: { user_id: req.params.id }
        })
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE
users.post('/', async (req, res) => {
    try {
        const newUser = await Users.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new store',
            data: newUser
        })
    } catch(err) {
        res.status(500).json(err)
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
        res.status(200).json({
            message: `Successfully updates ${updateUser} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
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
        res.status(500).json({
            message: `Successfully deleted ${deleteUser} user(s)`
        })
    } catch(err) {
        res.status(200).json(err)
    }
})

module.exports = users