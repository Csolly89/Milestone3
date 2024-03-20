'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users }) {
      // define association here
      Reservation.belongsTo(Users, {
        foreignKey: 'user_id'
      })
    }
  }
  Reservation.init({
    res_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date:{
      type: DataTypes.DATE,
      allowNull: false
    }, 
    time:{
      type: DataTypes.DATE,
      allowNull: false  
    }, 
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    } 
  }, {
    sequelize,
    modelName: 'Reservation',
    tableName: 'reservations',
    timestamps: false
  });
  return Reservation;
};