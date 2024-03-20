const db = require('../models');
const {validationResult} = require("express-validator");
const Reservations = db.reservation;

exports.getReservation = async (req, res) => {
    try {
        const foundReservation = await Reservations.findAll({
            where: {userId: req.userId}
        })
        return res.status(200).send(foundReservation);
    } catch (err) {
        return res.status(500).send({error: err.message})
    }
}

exports.createReservation = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        //add userid to the reservation
        req.body.userId = req.userId;
        const newReservation = await Reservations.create(req.body)
        return res.status(200).send(newReservation);
    } catch (err) {
        return res.status(500).send({error: err.message})
    }
}

exports.editReservation = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const foundReservation = await Reservations.findOne({
            where: {id: req.params.reservationId}
        })
        if (!foundReservation) {
            return res.status(404).send({error: 'Reservation not found'});
        }
        await foundReservation.update(req.body);
        return res.status(200).send();
    } catch (err) {
        return res.status(500).send({error: err.message})
    }
}

exports.deleteReservation = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const foundReservation = await Reservations.findOne({
            where: {id: req.params.reservationId}
        })
        if (!foundReservation) {
            return res.status(404).send({error: 'Reservation not found'});
        }
        await Reservations.destroy({
            where: {
                id: req.params.reservationId
            }
        })
        return res.status(200).send();
    } catch (err) {
        return res.status(500).send({error: err.message})
    }
}


