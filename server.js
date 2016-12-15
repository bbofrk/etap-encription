const express = require('express');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('hello express');
  res.sendFile('public/index.html', {root: __dirname});
});

app.get('/help', (req, res) => {
  // res.send('hello express');
  res.sendFile('public/help.html', {root: __dirname});
});

app.get('/qrcode', (req, res) => {
  // res.send('hello express');
  res.sendFile('public/qrcode.html', {root: __dirname});
});

app.get('/message', (req, res) => {
  res.sendFile('public/message.html', {root: __dirname});
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`)
});
