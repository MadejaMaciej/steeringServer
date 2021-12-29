const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
    for(el in req.body){
        console.log(`${el}: ${req.body[el]}`)
    }
    res.status(200).send({response: "Done"})
})

module.exports = router