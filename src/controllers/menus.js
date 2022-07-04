const Menu = require('../models/menus');

const createMenu = async (req, res) => {
  try {
    const menu = await Menu.create(req.body);
    res.status(201).json({ menu, message: 'Menu criado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  createMenu
}