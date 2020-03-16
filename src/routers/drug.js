const express = require('express')
const Drug = require('../models/drug')
const router = new express.Router()


router.get('/drug/get/:name', async (req, res) => {
    const name = req.params.name
    try {
        Drug.findOne({ name }, (err, doc) => {
            if (err) return res.sendStatus(404)
            console.log(doc)
            res.send(doc)
        });
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router