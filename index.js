const express = require('express')
const http = require('http')
var cors = require("cors")

var uploadPosition = require('./api/uploadPosition')

var app = express()
var server = http.createServer(app)

app.use(cors())
app.use('/api/uploadPosition', uploadPosition)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))