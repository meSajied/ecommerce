const {DataTypes} = require('sequelize');
const sequelize = require("../database-connection");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },

  customer_id: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },

  order_date: {
    type: DataTypes.DATE,
  },

  status: {
    type: DataTypes.STRING,
  },

  total_amount: {
    type: DataTypes.INTEGER,
  }
});

Order.associate = function(models) {
  Order.many(models.Customer, {
    onDelete: "CASCADE",
    foreignKey: "customer_id",
  })
}

module.exports = {Order};