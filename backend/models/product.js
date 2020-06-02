const sequelize = require('sequelize');
const faker = require('faker');

const sequelizeInstance = require('./sequelize.js');

const Product = sequelizeInstance.define('product', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: sequelize.STRING,
  },
  description: {
    type: sequelize.TEXT,
  },
  stock: {
    type: sequelize.INTEGER,
  },
  image: {
    type: sequelize.STRING,
  },
}, {
  hooks: {
    // beforeCreate: async (product) => {
    //   product.id =
    // },
  },
});

Product.generateFakeProducts = async () => {
  const currentProducts = await Product.findAll();
  if (currentProducts.length === 0) {
    const newProductList = [];
    for (let i = 0; i < 100; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      newProductList[i] = await Product.create({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        stock: Math.round(Math.random() * 10),
        image: faker.image.image(),
      });
    }
  }
};

Product.sync();

module.exports = Product;
