const express = require('express')
const router = express.Router()
const path = require("path");

router.get('/', (req, res) => {
    // const name = req.cookies.username;
    res.render('index');
    // res.render('about', { basedir: __dirname });
    // if (name) {
    // res.render('index', { name });
    // } else {
    //     res.redirect('/hello');
    // }
});

// main route loads main page
router.get("/main", (req, res) => {
    res.render('main', { basedir: __dirname });
});

// growers route loads growers page
router.get("/growers", (req, res) => {
    res.render('growers', { basedir: __dirname });
});

// dispensaries route loads dispensaries page
router.get("/dispensaries", (req, res) => {
    res.render('dispensaries', { basedir: __dirname });
});

// about route loads about page
router.get("/about", (req, res) => {
    res.render('about', { basedir: __dirname });
});

// join route loads join page
router.get("/join", (req, res) => {
    res.render('join', { basedir: __dirname });
});

// login route loads login
router.get("/login", (req, res) => {
    res.render('login', { basedir: __dirname });
});

module.exports = router