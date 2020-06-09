const express = require('express');

const router = express.Router();

router.post('/', async (request, response) => {
  response.header('Access-Control-Allow-Origin', request.headers.origin);
  request.session.destroy((err) => {
    if (!err) {
      response.clearCookie('connect.sid', { path: '/' });
      response.send('hue');
    }
    response.status(400).send('Couldn\'t delete session');
  });
});

module.exports = router;
