const express = require('express')
const app = express()


var cors = require('cors')
app.use(cors())

let port = 4000


app.get('/', function (req, res) {
  res.send('port ' +port)
})
app.get('/massage', function (req, res) {
  res.json('Hello World prokm server in port ' +port)
})
app.get('/massage3', function (req, res) {
  res.json('Hello World prokm server in port ' +port)
})
app.get('/massage4', function (req, res) {
  res.json('Hello World prokm server in port ' +port)
})

app.listen(port, ()=>console.log("the server run in port " + port))