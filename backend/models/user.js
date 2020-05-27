const Sequelize = require('sequelize');

const {
  DB_USER, DB_PASSWORD, DB_URL, DB_PORT, DB_NAME,
} = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_URL}:${DB_PORT}/${DB_NAME}`,
);

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
  },
  sessions: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
}, {});

module.exports = User;
