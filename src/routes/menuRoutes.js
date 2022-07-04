const express = require('express');
const { createMenu, getAllMenus, getMenu, updateMenu } = require('../controllers/menus');
const router = express.Router();

router.post('/', createMenu);
router.get('/', getAllMenus);
router.get('/:id', getMenu);
router.patch('/:id', updateMenu);

module.exports = router;