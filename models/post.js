const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class post extends Model {}

post.init(
  {
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    },
    userId: { 
      type: DataTypes.INTEGER,
      references:{
        model:"user",
        key:"id"
      }
    }
  },

  {
    sequelize
  }
);

module.exports = post;