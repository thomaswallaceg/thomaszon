const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.get('/', async (request, response) => {
  const productList = await Product.findAll({ attributes: ['id', 'name', 'description', 'stock', 'image'] });
  response.send(productList.slice(0, 50));
});

module.exports = router;
