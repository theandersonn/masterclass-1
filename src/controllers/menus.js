const Menu = require('../models/menus');

const createMenu = async (req, res) => {
  try {
    const menu = await Menu.create(req.body);
    res.status(201).json({ menu, message: 'Menu criado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.find({}).sort('createdAt');
    res.status(200).json({ menus });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  createMenu,
  getAllMenus
}