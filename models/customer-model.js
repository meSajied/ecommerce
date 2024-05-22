const {DataTypes} = require('sequelize');
const {sequelize} = require("../database-connection");

const Customers = sequelize.define("Customer", {
  id: {
    type: DataTypes.UUID,
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
    unique: true,
  }
});

module.exports = {Customers};