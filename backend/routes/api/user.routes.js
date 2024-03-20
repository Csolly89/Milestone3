const router = require('express').Router();
const {createUser, loginUser } = require('../../controllers/user.controller.js');
const {body} = require("express-validator");

const userValidationRules = [
    body('email').isEmail().withMessage('Enter a valid email address').trim().escape(),
    body('password').not().isEmpty().withMessage('Password is required').trim().escape(),
];

router.post('/', userValidationRules, createUser);
router.post('/login', userValidationRules, loginUser);

module.exports = router;
