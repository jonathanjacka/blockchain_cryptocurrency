const express = require('express');
const Blockchain = require('./Blockchain');
const dotenv = require('dotenv').config();

const app = express();
const blockchain = new Blockchain();

app.get('/api/blocks', (req, res) => {
  res.json(blockchain.chain);
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, hello there...`);
});
