const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection')

class comment extends Model {}

comment.init(
  {
    body: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize
  }
);

module.exports = comment;