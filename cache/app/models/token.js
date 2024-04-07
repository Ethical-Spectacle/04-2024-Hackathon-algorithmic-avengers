// models/Token.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Token = sequelize.define('Token', {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Token;
