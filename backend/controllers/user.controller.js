const {createToken} = require("../utils/authUtils");
const db = require('../models');
const {validationResult} = require("express-validator");
const User = db.user;

function createTokenFromUser(user){
    if (!user)
        return '';
    return createToken(user.email, user.id);
}

function returnUserWithToken(user, res){
    const userObj = {
        id: user.id,
        email: user.email
    };

    return res.status(200).send({
        user: userObj,
        accessToken: createTokenFromUser(user)
    })
}

exports.createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newUser = await User.create(req.body)
        return returnUserWithToken(newUser, res);
    }
    catch(err) {
        return res.status(500).send({error: err.message})
    }
}

exports.loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const foundUser = await User.findOne({
            where: {email: req.body.email}
        })
        if (!foundUser)
            return res.status(404).send({error: 'User not found'});

        if (!foundUser.checkPassword(req.body.password))
            return res.status(400).send({error: 'Wrong password'});

        return returnUserWithToken(foundUser, res);
    }
    catch(err) {
        return res.status(500).send({error: err.message})
    }
}
