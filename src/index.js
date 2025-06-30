const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());

app.get('/tokens/primitive', (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, '../tokens/primitive.json'), 'utf-8');
  res.json(JSON.parse(data));
});

app.get('/tokens/semantic', (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, '../tokens/semantic.json'), 'utf-8');
  res.json(JSON.parse(data));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Token server is running at http://localhost:${PORT}`);
});
