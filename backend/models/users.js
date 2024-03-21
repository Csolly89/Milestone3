'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Reservations}) {
      // define association here
      Users.hasMany(Reservations,{
        foreignKey: 'user_id',
        as: 'reservations'
      })
    }
  }
  Users.init({
    User_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }, 
    first_name:{
      type: DataTypes.STRING,
      allowNull: false
    }, 
    last_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false
    }, 
    phone_number:{
      type: DataTypes.STRING,
      allowNull: false
    }, 
    password:{
      type: DataTypes.STRING,
      allowNull: false
    }, 
    zipcode:{
      type: DataTypes.INTEGER,
      allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
    timestamps: false
  });
  return Users;
};