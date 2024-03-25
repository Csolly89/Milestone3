const bcrypt = require("bcrypt");

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
    static associate({ Reservations }) {
      // define association here
      Users.hasMany(Reservations,{
        foreignKey: 'user_id',
        as: 'reservations'
      })
    }
  }
  Users.init({
    user_id:{
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
    hooks: {
      async beforeCreate(newUserData){
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updateUserData){
        updateUserData.password = await bcrypt.hash(
          updateUserData.password, 10
        );
        return updateUserData
      }
    },
    sequelize,
    modelName: 'Users',
    tableName: 'users',
    timestamps: false
  });

  Users.prototype.checkPassword = function(loginPw){
    return bcrypt.compareSync(loginPw, this.password);
  }

  return Users;
};