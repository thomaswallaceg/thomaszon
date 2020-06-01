const Sequelize = require('sequelize');

const {
  DB_USER, DB_PASSWORD, DB_URL, DB_PORT, DB_NAME,
} = process.env;

module.exports = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_URL,
  port: DB_PORT,
  dialect: 'postgres',
});
