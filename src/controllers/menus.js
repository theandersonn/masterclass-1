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

const getMenu = async (req, res) => {
  try {
    const menu = await Menu.findOne({ _id: req.params.id });
    res.status(200).json({ menu });
  } catch (error) {
    res.status(404).json({ error: 'Item doesn`t exist.' });
  }
};

const updateMenu = async (req, res) => {
  const { name, brand } = req.body;

  try {
    const menu = await Menu.findOne({ _id: req.params.id });
    
    Object.assign(menu, {
      name,
      brand
    });
    
    await menu.save();
    res.status(200).json({ menu });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  createMenu,
  getAllMenus,
  getMenu,
  updateMenu
}