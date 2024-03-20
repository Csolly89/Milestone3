const router = require('express').Router();
const {body, param} = require("express-validator");
const {verifyAccessToken} = require("../../utils/authUtils");
const {createReservation, editReservation, deleteReservation, getReservation} = require("../../controllers/reservation.controller");

const reservationBodyValidationRules = [
    body('reservationDate').not().isEmpty().withMessage('Reservation date is required').trim().escape(),
    body('partySize').not().isEmpty().withMessage('Number of party members is required').trim().escape(),
    body('partyName').not().isEmpty().withMessage('Party name is required').trim().escape(),
];

const reservationParameterValidationRules = [
    param('reservationId').not().isEmpty().withMessage('Reservation id is required').trim().escape(),
]

const reservationEditValidationRules = [...reservationParameterValidationRules, ...reservationBodyValidationRules];

router.get('/',verifyAccessToken, getReservation);
router.post('/', reservationBodyValidationRules, verifyAccessToken, createReservation);
router.put('/:reservationId', reservationEditValidationRules, verifyAccessToken, editReservation);
router.delete('/:reservationId', reservationParameterValidationRules, verifyAccessToken, deleteReservation);

module.exports = router;
