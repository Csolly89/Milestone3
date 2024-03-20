const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    const Reservation = sequelize.define("reservation", {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            reservationDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            partySize: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            partyName: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }
    );

    return Reservation;
};
