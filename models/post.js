const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class post extends Model {}

post.init(
  {
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize
  }
);

module.exports = post;