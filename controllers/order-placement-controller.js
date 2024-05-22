const sequelize = require("sequelize");

const {Products} = require("../models/product-model");
const {OrderItems} = require("../models/order-item-model");
const {Orders} = require("../models/order-model");
const {logger} = require("../logger");

async function OrderPlacementController(req, res, next) {
  const {items} = req.body;
  const transaction = await sequelize.transaction();

  try {
    let totalAmount = 0;
    for(let item of items) {
      let product = await Products.findByPk(item.productId, {transaction});

      if(product.stock < item.orderQuantity) {
        return res.status(400).json({message: "Insufficient stock"});
      }

      totalAmount += product.price * item.orderQuantity;

      const orders = await Orders.create({
        id: req.body.orderId,
        customerId: req.body.customerId,
        orderDate: new Date(),
        status: "pending",
        totalAmount: totalAmount
      }, {transaction})

      await orders.save({transaction});
    }

    product.stock -= item.orderQuantity;
    product.save({transaction});

    const orderItems = await OrderItems.create({
      id: req.body.orderItemId,
      orderId: order.id,
      productId: product.id,
      orderQuantity: item.orderQuantity,
      price: product.price
    }, {transaction})

    await orderItems.save({transaction});

    await transaction.commit();
    res.status(201)
  }catch(err) {
    transaction.rollback();
    res.status(500).json({ error: err.message });
    logger.error("Could not execute transaction", err);
  }
}

module.exports = {OrderPlacementController};