const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection')

class comments extends Model {}

comments.init(
  {
    body: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize
  }
);

module.exports = comments;