const express = require('express');

const router = express.Router();

router.post('/', async (request, response) => {
  response.header('Access-Control-Allow-Origin', request.headers.origin);
  try {
    await new Promise((resolve, reject) => {
      request.session.destroy((err) => {
        if (err) reject();
        resolve();
      });
    });
    response.clearCookie('connect.sid', { path: '/' }).send('Succesfully logged out');
  } catch (error) {
    response.status(400).send('Error logging out');
  }
});

module.exports = router;
