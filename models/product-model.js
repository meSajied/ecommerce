const {DataTypes} = require('sequelize');
const sequelize = require("../database-connection");

const Product = sequelize.define("product", {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  }
});

module.exports = {Product}