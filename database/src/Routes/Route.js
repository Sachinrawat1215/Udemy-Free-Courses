const express = require('express');
const router = express.Router();
const main = require('../Controller/apiController');

router.get('/', main.main);

module.exports = router;