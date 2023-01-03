const express = require('express');
const Blockchain = require('./Blockchain');
const PubSub = require('./pubsub');

const dotenv = require('dotenv').config();

const app = express();
const blockchain = new Blockchain();
const pubsub = new PubSub({ blockchain });

//testy testy
setTimeout(() => pubsub.broadcastChain(), 1000);

app.use(express.json());

//Routes
app.get('/api/blocks', (req, res) => {
  res.json(blockchain.chain);
});

app.post('/api/mine', (req, res) => {
  const { data } = req.body;
  blockchain.addBlock({ data });
  res.redirect('/api/blocks');
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, hello there...`);
});
