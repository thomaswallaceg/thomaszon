const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

router.post('/', async (request, response) => {
  const { username: loginUsername, password: loginPassword } = request.body;
  if (!loginUsername) return response.status(400).send('No username');
  if (!loginPassword) return response.status(400).send('No password');

  const userQueryResult = await User.findAll({ where: { username: loginUsername } });

  if (userQueryResult.length === 0) return response.status(400).send('Can\'t find username');
  if (userQueryResult.length > 1) return response.status(500).send('Database error');

  bcrypt.compare(loginPassword, userQueryResult[0].password, (err, res) => {
    if (err) return response.status(500).send('Hashing error');
    if (!res) return response.status(400).send('Wrong password');

    // TODO: implement login cookies
    return response.status(200).send(`Welcome, ${loginUsername}!`);
  });
  return 1;
});

module.exports = router;
