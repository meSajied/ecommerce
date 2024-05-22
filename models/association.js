const {Orders} = require("./order-model");
const {Customers} = require("./customer-model")
const {Products} = require("./product-model")
const {OrderItems} = require("./order-item-model")
const {sequelize} = require("../database-connection");

Customers.hasOne(Orders, {
  onDelete: "CASCADE",
  foreignKey: "customerId",
  field: 'customer_id',
})

Orders.hasMany(OrderItems, {
  onDelete: "CASCADE",
  foreignKey: "orderId",
  field: 'order_id',
})

Products.hasOne(OrderItems, {
  onDelete: "CASCADE",
  foreignKey: "productId",
  field: 'product_id',
})

sequelize.sync();