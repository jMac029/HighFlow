const express = require('express')
const router = express.Router()
const path = require("path")

let db = require("../models");

// module.exports = function(router) {
router.get("/api/dispensers", (req, res) => {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Product
    db.Dispenser.findAll({
        //include: [db.Product]
    }).then((dbDispenser) => {
        res.json(dbDispenser);
    });
});

router.get("/api/dispensers/:id", (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Product
    db.Dispenser.findOne({
        where: {
            id: req.params.id
        }
        //include: [db.Product]
    }).then((dbDispenser) => {
        res.json(dbDispenser);
    });
});

router.post("/api/dispensers", (req, res) => {
    res.cookie('username', req.body.username)
    res.cookie('business_name', req.body.business_name)
    db.Dispenser.create({
            username: req.body.username,
            dispenser_name: req.body.business_name,
            license: req.body.dispenser_license,
            city: req.body.dispenser_city,
            state: req.body.dispenser_state,
            email: req.body.dispenser_email,
            about: req.body.dispenser_about,
            strains_wanted: req.body.dispenser_strains,
            webpage: req.body.dispenser_web,
            image: req.body.dispenser_img
        }).then((dbDispenser) => {
            res.redirect('/dispensaries')
        })
        .catch((err) => {
            res.render('error')
        })
});

router.delete("/api/dispensers/:id", (req, res) => {
    db.Dispenser.destroy({
        where: {
            id: req.params.id
        }
    }).then((dbDispenser) => {
        res.json(dbDispenser);
    });
});

// };

module.exports = router