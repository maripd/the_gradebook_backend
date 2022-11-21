'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Grade.init({
    score: DataTypes.INTEGER,
    letter: DataTypes.STRING,
    studentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Grade',
  });
  return Grade;
};