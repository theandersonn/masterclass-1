const express = require('express');
const { createMenu } = require('../controllers/menus');
const router = express.Router();

router.post('/', createMenu);

module.exports = router;