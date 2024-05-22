const {DataTypes} = require('sequelize');
const sequelize = require("../database-connection");

const Customer = sequelize.define("Customer", {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true,
    }
  },
  phone: {
    type: DataTypes.STRING,
  }
});

Customer.associate = function(models) {
  Customer.belongsTo(models.Order, {
    onDelete: "CASCADE",
    foreignKey: "id",
  })
}

module.exports = {Customer}