const express = require('express')
const router = express.Router()
const path = require("path")

let db = require("../models");

// module.exports = function(app) {
router.get("/api/growers", (req, res) => {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Product
    db.grower.findAll({
        //include: [db.Product]
    }).then(function(dbGrower) {
        res.json(dbGrower);
    });
});

router.get("/api/growers/:id", (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Product
    db.grower.findOne({
        where: {
            id: req.params.id
        }
        //include: [db.Product]
    }).then(function(dbGrower) {
        res.json(dbGrower);
    });
});

router.post("/api/growers", (req, res) => {
    db.grower.create(req.body).then(function(dbGrower) {
        res.json(dbGrower);
    });
    res.cookie('username', req.body.username);
    res.redirect('/growers');
});

router.delete("/api/growers/:id", (req, res) => {
    db.grower.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbGrower) {
        res.json(dbGrower);
    });
});

// };

module.exports = router