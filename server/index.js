const express = require('express');
const app = express();
const port = 3000;
const api = require('./helpers.js');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/photos', (req, res) => {
  api.getPhotosByDate()
    .then((result) => {
      res.send(result.data.photos);
    })
    .catch((err) => {
      res.send(err);
    })
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})