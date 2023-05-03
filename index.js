const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
app.use(cors());
app.get('/', (req, res) => {
  res.send('Chef is Cooking');
});

app.get('/categories', (req, res) => {
  res.json(categories);
});

app.listen(port, () => {
  console.log(`Chef is cooking on port: ${port}`);
});
