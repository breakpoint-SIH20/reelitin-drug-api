const express = require("express");
const Target = require("../models/target");
const router = new express.Router();

router.get("/target/get/:id", async (req, res) => {
    const id = req.params.id;
    try {
        Target.findOne({ id }, (err, doc) => {
            if (err || doc == null) return res.sendStatus(404);
            console.log(doc);
            res.send(doc);
        });
    } catch (e) {
        res.status(500).send();
    }
});

router.get("/target/find", async (req, res) => {
    const name = req.query.id;
    try {
        Target.find(
            {
                $or: [
                    {
                        dname: {
                            $regex: new RegExp(name, "i"),
                        },
                    },
                    {
                        organism: {
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

router.get("/target/list", async (req, res) => {
    try {
        Target.find({}, { id: 1, dname: 1, organism: 1 }, (err, doc) => {
            if (err || doc == null) return res.sendStatus(404);
            console.log(doc);
            res.send(doc);
        }).sort({ name: 1 });
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
