const {DataTypes} = require('sequelize');
const {sequelize} = require("../database-connection");

const OrderItems = sequelize.define("OrderItem", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },

  orderQuantity: {
    type: DataTypes.INTEGER,
    field: 'order_quantity',
  },

  price: {
    type: DataTypes.INTEGER,
  }
});

module.exports = {OrderItems};