const express = require('express');
const { createMenu, getAllMenus, getMenu } = require('../controllers/menus');
const router = express.Router();

router.post('/', createMenu);
router.get('/', getAllMenus);
router.get('/:id', getMenu);

module.exports = router;