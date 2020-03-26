const express = require('express')
const Drug = require('../models/drug')
const router = new express.Router()


router.get('/drug/get/:name', async (req, res) => {
    const name = req.params.name
    try {
        Drug.findOne({ name }, (err, doc) => {
            if (err || doc == null) return res.sendStatus(404)
            console.log(doc)
            res.send(doc)
        });
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/drug/find', async (req, res) => {
    const name = req.query.name
    try {
        Drug.findOne({ $or : [
            { 'synonyms.synonym._do' : { $regex : new RegExp(name, "i") } },
            { 'products.product.dname' : { $regex : new RegExp(name, "i") } }
        ]}, (err, doc) => {
            if (err || doc == null) return res.sendStatus(404)
            console.log(doc)
            res.send(doc)
        });
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router