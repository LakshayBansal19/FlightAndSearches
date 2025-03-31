'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  City.init({
    name: DataTypes.STRING,
    allowNull:false, //IF I AM ADDING DATA THROUGH JS THEN IT WILL NOT ALLOW NULL
    unique:true
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};