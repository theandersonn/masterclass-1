const createMenu = async (req, res) => {
  try {
    res.status(201).json({ message: 'Ok!' });
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  createMenu
}