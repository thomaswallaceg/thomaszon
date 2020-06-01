const sequelize = require('sequelize');

const bcrypt = require('bcrypt');
const sequelizeInstance = require('./sequelize.js');

const User = sequelizeInstance.define('user', {
  username: {
    type: sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  password: {
    type: sequelize.STRING,
  },
}, {
  hooks: {
    beforeCreate: async (user) => {
      const salt = await bcrypt.genSalt(12);
      // eslint-disable-next-line no-param-reassign
      user.password = await bcrypt.hash(user.password, salt);
    },
  },
});

User.validatePassword = async (user, password) => {
  const valid = await new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, res) => {
      if (err) reject();
      resolve(res);
    });
  });
  return valid;
};

User.sync();

module.exports = User;
