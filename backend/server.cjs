const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config({path: `/.env`});
const app = express();

const port = 3000
const gitbookSignKey = 'b1ceb872-d0e3-4ae2-8ba7-c43e95a3f976'


app.get('/', (req, res) => {
  const token = jwt.sign({ data: 'foobar' }, gitbookSignKey, { expiresIn: '1h' });
  const redirectURL = `https://documentation.rubilink.io/?jwt_token=${token}`;

  res.redirect(redirectURL);
});

app.listen(port, () => {
  console.log(`Rubilink Backend is running at http://localhost:${port}`)
});