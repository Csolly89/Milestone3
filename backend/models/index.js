const Sequelize = require("sequelize");

require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: process.env.DIALECT,
    protocol: process.env.PROTOCOL,
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//models
db.user = require('./user')(sequelize, Sequelize);
db.reservation = require('./reservation')(sequelize, Sequelize);

module.exports = db;
