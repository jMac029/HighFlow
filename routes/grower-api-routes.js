const express = require('express')
const router = express.Router()
const path = require("path")

let db = require("../models");

// module.exports = function(app) {
router.get("/api/growers", (req, res) => {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Product
    db.Grower.findAll({
        //include: [db.Product]
    }).then(function(dbGrower) {
        res.json(dbGrower);
    });
});

router.get("/api/growers/:id", (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Product
    db.Grower.findOne({
        where: {
            id: req.params.id
        }
        //include: [db.Product]
    }).then(function(dbGrower) {
        res.json(dbGrower);
    });
});

router.post('/api/growers', (req, res) => {
    res.cookie('username', req.body.username)
    res.cookie('business_name', req.body.business_name)
    db.Grower.create({
            username: req.body.username,
            grower_name: req.body.business_name,
            license: req.body.grower_license,
            city: req.body.grower_city,
            state: req.body.grower_state,
            email: req.body.grower_email,
            system: req.body.grower_system,
            about: req.body.grower_about,
            strains: req.body.grower_strains,
            cycle: req.body.grower_cycle,
            webpage: req.body.grower_web,
            image: req.body.grower_img
        }).then((dbGrower) => {
            // res.cookie('username', req.body.username)
            res.redirect('/growers')
        })
        .catch((err) => {
            res.json(err)
        })
})

router.delete("/api/growers/:id", (req, res) => {
    db.Grower.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbGrower) {
        res.json(dbGrower);
    });
});

// };

module.exports = router