const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())

let port = 3008

app.get('/', function (req, res) {
  res.json('port ' +port)
})
app.get('/massage', function (req, res) {
  res.json('Hello World prokm server in port ' +port)
})

app.listen(port, ()=>console.log("the server run in port " + port))