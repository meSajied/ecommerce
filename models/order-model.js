const {DataTypes} = require('sequelize');
const {sequelize} = require("../database-connection");

const Orders = sequelize.define("Order", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },

  orderDate: {
    type: DataTypes.DATE,
    field: 'order_date'
  },

  status: {
    type: DataTypes.STRING,
  },

  totalAmount: {
    type: DataTypes.INTEGER,
    field: 'total_amount',
  }
});

module.exports = {Orders};