'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Restaurants }) {
      // define association here
      Reservations.belongsTo(Users,{
        foreignKey: 'user_id',
        as: 'users'
      })

      Reservations.belongsTo(Restaurants,{
        foreignKey: 'rest_id',
        as: 'restaurants'
      })
    }
  }
  Reservations.init({
    res_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, 
    date:{
      type: DataTypes.DATE,
      allowNull: false
    }, 
    time:{
      type: DataTypes.TIME,
      allowNull: false
    }, 
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rest_id:{
      type: DataTypes.INTEGER,
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