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
            //console.log(dbGrower)
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
    res.cookie('usertype', req.body.usertype);
    // res.redirect('/');
})


module.exports = router