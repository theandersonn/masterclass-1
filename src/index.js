require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/menu', (req, res) => {
  res.json({ message: 'Ok!' });
});

app.listen(3333);