const {DataTypes} = require('sequelize');
const sequelize = require("../database-connection");

const OrderItem = sequelize.define("OrderItem", {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },

  order_id: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUIDV4,
    foreignKey: true,
    allowNull: false,
  },

  product_id: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUIDV4,
    foreignKey: true,
    allowNull: false,
  },

  order_quantity: {
    type: DataTypes.INTEGER,
  },

  price: {
    type: DataTypes.INTEGER,
  }
});

module.exports = {OrderItem};