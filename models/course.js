'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsToMany(models.Student, {
        as: 'pupils',
        through: models.StudentCourse,
        foreignKey: 'courseId'
      })
      Course.hasMany(models.Grade, { as: 'scores', foreignKey: 'gradeId' })
    }
  }
  Course.init(
    {
      name: DataTypes.STRING,
      gradeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'grades',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Course',
      tableName: 'courses'
    }
  )
  return Course
}
