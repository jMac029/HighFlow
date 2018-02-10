const express = require('express')
const router = express.Router()
const path = require("path")
const dialog = require('dialog')

let db = require("../models")

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
            res.redirect('/profile/' + req.body.username)
        })
        .catch((err) => {
            console.log(err.errors[0].message)
            dialog.err(err.errors[0].message)
        })
})

router.put('/api/growers/:id', (req, res) => {
    db.Grower.update({
            where: {
                id: req.params.id
            },
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
            res.redirect('/profile/' + req.body.username)
        })
        .catch((err) => {
            console.log(err.errors[0].message)
            dialog.err(err.errors[0].message)
        })
})

router.delete('/api/growers/:username', (req, res) => {
    console.log(req.body)
    res.clearCookie('username')
    res.clearCookie('userType')
    res.clearCookie('business_name')
    db.Grower.destroy({
        where: {
            username: req.params.username
        }
    }).then(function() {
        res.redirect('/')
    })
})


module.exports = router