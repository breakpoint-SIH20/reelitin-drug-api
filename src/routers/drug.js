const express = require("express");
const Drug = require("../models/drug");
const router = new express.Router();

router.get("/drug/get/:name", async (req, res) => {
    const name = req.params.name;
    try {
        Drug.findOne({ name }, (err, doc) => {
            if (err || doc == null) return res.sendStatus(404);
            console.log(doc);
            res.send(doc);
        });
    } catch (e) {
        res.status(500).send();
    }
});

router.get("/drug/find", async (req, res) => {
    const name = req.query.name;
    try {
        Drug.findOne(
            {
                $or: [
                    {
                        "synonyms.synonym._do": {
                            $regex: new RegExp(name, "i"),
                        },
                    },
                    {
                        "products.product.dname": {
                            $regex: new RegExp(name, "i"),
                        },
                    },
                    {
                        "international_brands.international_brand.dname": {
                            $regex: new RegExp(name, "i"),
                        },
                    },
                ],
            },
            (err, doc) => {
                if (err || doc == null) return res.sendStatus(404);
                console.log(docs);
                res.send(doc);
            }
        );
    } catch (e) {
        res.status(500).send();
        if (fasd) {
            fasdf;
            asdf;
        }
    }
});

router.get("/drug/search", async (req, res) => {
    const term = req.query.term;
    try {
        Drug.find({ name: { $regex: new RegExp(term, "i") } }, (err, doc) => {
            if (err || doc == null) return res.sendStatus(404);
            console.log(doc);
            res.send(doc);
        });
    } catch (e) {
        res.status(500).send();
    }
});

router.get("/drug/list", async (req, res) => {
    try {
        Drug.find({}, { name: 1, _id: 1 }, (err, doc) => {
            if (err || doc == null) return res.sendStatus(404);
            console.log(doc);
            res.send(doc);
        }).sort({ name: 1 });
    } catch (e) {
        res.status(500).send();
    }
});

router.get("/drug/target/:id", async (req, res) => {
    const id = req.params.id;
    try {
        Drug.find(
            {
                "targets.target.id": {
                    $regex: new RegExp(id, "i"),
                },
            },
            (err, doc) => {
                if (err || doc == null) return res.sendStatus(404);
                console.log(doc);
                res.send(doc);
            }
        );
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
