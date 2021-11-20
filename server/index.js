const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})