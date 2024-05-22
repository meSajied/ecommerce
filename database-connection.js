const {Sequelize} = require('sequelize');
const {logger} = require('./logger');

let sequelize;

try {
  sequelize = new Sequelize(process.env.DB_URL);
  logger.info("Connected to the database", sequelize.config);
} catch(err) {
  logger.error("Could not connect to database",err);
}

module.exports = {sequelize};