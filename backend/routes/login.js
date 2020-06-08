const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/', async (request, response) => {
  const { username: loginUsername, password: loginPassword } = request.body;
  if (!loginUsername) return response.status(400).send('No username');
  if (!loginPassword) return response.status(400).send('No password');

  const userQueryResult = await User.findAll({ where: { username: loginUsername } });

  if (userQueryResult.length === 0) return response.status(400).send('Can\'t find username');
  if (userQueryResult.length > 1) return response.status(500).send('Database error');

  const validPassword = await User.validatePassword(userQueryResult[0], loginPassword);
  if (!validPassword) return response.status(400).send('Wrong password');

  request.session.username = loginUsername;
  response.setHeader('Access-Control-Allow-Origin', request.headers.origin);
  return response.status(200).send(`Welcome, ${loginUsername}!`);
});

module.exports = router;
