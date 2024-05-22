const {DataTypes} = require('sequelize');
const {sequelize} = require("../database-connection");

const Products = sequelize.define("product", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  }
});

module.exports = {Products};