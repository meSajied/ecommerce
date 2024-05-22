const {DataTypes} = require('sequelize');
const {sequelize} = require("../database-connection");

const Products = sequelize.define("product", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING
  },

  price: {
    type: DataTypes.DECIMAL
  },

  stock: {
    type: DataTypes.INTEGER
  }
});

module.exports = {Products};