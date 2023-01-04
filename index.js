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
  pubsub.broadcastChain();
  res.redirect('/api/blocks');
});

const DEFAULT_PORT = process.env.PORT || 5000;
let PEER_PORT;

if (process.env.GENERATE_PEER_PORT === 'true') {
  PEER_PORT = Number(DEFAULT_PORT) + Math.ceil(Math.random() * 1000);
}

const PORT = PEER_PORT || DEFAULT_PORT;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, hello there...`);
});
