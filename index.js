const express = require('express')
const http = require('http')
var cors = require("cors")
var bodyParser = require('body-parser')

var uploadPosition = require('./api/uploadPosition')

var app = express()
var server = http.createServer(app)

app.use(cors())
app.use( bodyParser.json())
app.use(bodyParser.urlencoded({     
  extended: true
}))
app.use('/api/uploadPosition', uploadPosition)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))