const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('images'));

app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html')
});

app.post('/', function (req, res, next) {
  //TO DO 
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('Running on ' + PORT)
});
