const jwt = require('jsonwebtoken');

const secret = "restaurantsecretkey";

exports.createToken = (email, id) => {
    return jwt.sign({email, id}, secret, {expiresIn: 86000})
}