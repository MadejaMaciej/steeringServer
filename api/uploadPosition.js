const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.post('/',jsonParser, async (req, res) => {
    console.log("Request")
    res.status(200).send({req: "Done"})
})

module.exports = router