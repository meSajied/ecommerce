const {Orders} = require("./order-model");
const {Customers} = require("./customer-model")
const {Products} = require("./product-model")
const {OrderItems} = require("./order-item-model")
const {sequelize} = require("../database-connection");

Customers.hasMany(Orders, {
  onDelete: "CASCADE",
  foreignKey: "orderId",
  field: 'order_id',
})

OrderItems.hasMany(Orders, {
  onDelete: "CASCADE",
  foreignKey: "orderId",
  field: 'order_id',
})

OrderItems.hasMany(Products, {
  onDelete: "CASCADE",
  foreignKey: "productId",
  field: 'product_id',
})

sequelize.sync()