const express = require('express');
const app = express();
const port = 3000;
const api = require('./helpers.js');
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));


app.get('/photos/:date', (req, res) => {
  let date = req.params.date;
  let value = myCache.get(date);

  if (value === undefined) {
    api.getPhotosByDate(date)
      .then((result) => {
        myCache.set(date, result.data.photos, 300);
        res.send(result.data.photos);
      })
      .catch((err) => {
        res.send(err);
      })
  } else {
    res.send(value);
  }
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})