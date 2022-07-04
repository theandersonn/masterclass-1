const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema(
  {
    name: {
      type: String, 
      required: true
    },
    brand: {
      type: String, 
      required: true
    }
  },
  { timestamps: true },
);

module.exports = mongoose.model('Menu', MenuSchema);