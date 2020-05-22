const express = require('express'); // eslint-disable-line import/no-unresolved

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
