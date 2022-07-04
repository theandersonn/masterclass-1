const express = require('express');
const { createMenu, getAllMenus } = require('../controllers/menus');
const router = express.Router();

router.post('/', createMenu);
router.get('/', getAllMenus);

module.exports = router;