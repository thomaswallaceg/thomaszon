const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

router.post('/', (request, response) => {
  const { username: loginUsername, password: loginPassword } = request.body;
  if (!loginUsername) return response.send('No username');
  if (!loginPassword) return response.send('No password');
  User.findAll({
    where: { username: loginUsername },
  }).then((userQueryResult) => {
    if (userQueryResult.length === 0) return response.send('Can\'t find username');
    if (userQueryResult.length > 1) return response.send('Database error');
    bcrypt.compare(loginPassword, userQueryResult[0].password, (err, res) => {
      if (err) return response.send('Hashing error');
      if (!res) return response.send('Wrong password');
      // response.cookie(loginUsername, 'code', { httpOnly: false });
      return response.send(`Welcome, ${loginUsername}!`);
    });
    return 1;
  });
  return 1;
});

module.exports = router;
