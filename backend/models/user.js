const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://thomaszon:hola@localhost:5432/thomaszonDB');

const User = sequelize.define('user', {
  // attributes
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
User.sync();

module.exports = User;
