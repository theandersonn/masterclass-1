require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const cors = require('cors');
const menuRoutes = require('./routes/menuRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/menu', menuRoutes);

const startApp = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT, console.log(`Servidor funcionando em http://localhost:${process.env.PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startApp();