const express = require('express')
const router = express.Router()
const path = require("path")


let db = require("../models");


router.get('/', (req, res) => {
    const name = req.cookies.username
    const business_name = req.cookies.business_name
    if (name) {
        db.Grower.findAll({
            limit: 3,
            order: [
                ['createdAt', 'DESC']
            ]
        }).then(function(dbGrower) {
            res.render('main', { name, business_name, dbGrower })
        })
    } else {
        res.redirect('/join');
    }
});

// main route loads main page
router.get("/main", (req, res) => {
    const name = req.cookies.username
    const business_name = req.cookies.business_name
    if (name) {
        res.render('main', { name, business_name })
            //res.render('main', { name })
    } else {
        res.redirect('/join')
    }

})

// growers route loads growers page
router.get("/growers", (req, res) => {
    const name = req.cookies.username
    const business_name = req.cookies.business_name
    if (name) {
        // res.render('growers', { basedir: __dirname })
        db.Grower.findAll({
            //include: [db.Product]
        }).then(function(dbGrower) {
            //res.json(dbGrower);
            console.log(dbGrower)
            res.render('growers', { name, business_name, dbGrower })
        });
    } else {
        res.redirect('/join');
    }
})

// dispensaries route loads dispensaries page
router.get("/dispensaries", (req, res) => {
    const name = req.cookies.username
    const business_name = req.cookies.business_name
    if (name) {
        db.Dispenser.findAll({
            //include: [db.Product]
        }).then((dbDispenser) => {
            res.render('dispensaries', { name, business_name, dbDispenser })
        })
    } else {
        res.redirect('/join')
    }
})

// about route loads about page
router.get("/about", (req, res) => {
    const name = req.cookies.username
    const business_name = req.cookies.business_name
    if (name) {
        res.render('about', { name, business_name })
            //res.render('main', { name })
    } else {
        res.render('about')
    }
});

// join route loads join page
router.get("/join", (req, res) => {
    const name = req.cookies.username
    const business_name = req.cookies.business_name
    if (name) {
        res.render('main', { name, business_name })
            //res.render('main', { name })
    } else {
        res.render('join')
    }

})

// join post route for collecting the username to save in the cookie
router.post('/join', (req, res) => {
    res.cookie('username', req.body.username);
    // res.redirect('/');
    db.Grower.create({
            grower_name: req.body.username,
            license: req.body.grower_license,
            city: req.body.grower_city,
            state: req.body.grower_state,
            email: req.body.grower_email,
            bio: req.body.grower_bio,
            //indoor: req.body.grower - indoor,
            strains: req.body.grower_strains,
            cycle: req.body.grower_cycle
        }).then((dbGrower) => {
            res.redirect('/growers')
                //res.cookie('username', req.body.username);
        })
        .catch((err) => {
            res.json(err)
        })
})

// login route loads login
// router.get("/login", (req, res) => {
//     res.render('login', { basedir: __dirname })
// })

module.exports = router