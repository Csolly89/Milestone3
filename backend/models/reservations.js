'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users }) {
      // define association here
      Reservations.belongsTo(Users, {
        foreignKey: 'user_id',
        as: 'users'
      })
    }
  }
  Reservations.init({
    res_id:{
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
      type:  DataTypes.INTEGER,
      allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'Reservations',
    tableName: 'reservations',
    timestamps: false
  });
  return Reservations;
};