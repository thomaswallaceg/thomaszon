const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/', async (request, response) => {
  const { username: newUsername, password: newPassword } = request.body;
  if (!newUsername) return response.status(400).send('No username');
  const usernameRegExp = /^([A-Za-z0-9-_])+$/g;
  if (!usernameRegExp.test(newUsername) || newUsername.length >= 32) {
    return response.status(400).send('Usernames can only contain alphanumeric characters, \'-\' and \'_\', and must not be longer than 32 characters.');
  }
  if (!newPassword) return response.status(400).send('No password');

  const userQueryResult = await User.findAll({ where: { username: newUsername } });

  if (userQueryResult.length > 0) return response.status(400).send(`The username ${newUsername} has already been registered.`);
  if (userQueryResult.length > 1) return response.status(500).send('Database error');

  const newUser = await User.create({ username: newUsername, password: newUsername });

  if (newUser) return response.status(200).send(`Welcome to thomaszon, ${newUsername}!`);
  return response.status(500).send('Database error');
});

module.exports = router;
