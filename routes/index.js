const express = require('express')
const router = express.Router()
const path = require("path");

// name cookie from the join page


router.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('main', { name });
    } else {
        res.redirect('/join');
    }
});

// main route loads main page
router.get("/main", (req, res) => {
    const name = req.cookies.username
    if (name) {
        res.render('main', { name })
            //res.render('main', { name })
    } else {
        res.redirect('/join')
    }

})

// growers route loads growers page
router.get("/growers", (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('growers', { basedir: __dirname })
    } else {
        res.redirect('/join');
    }
})

// dispensaries route loads dispensaries page
router.get("/dispensaries", (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('dispensaries', { basedir: __dirname });
    } else {
        res.redirect('/join');
    }
});

// about route loads about page
router.get("/about", (req, res) => {
    res.render('about', { basedir: __dirname });
});

// join route loads join page
router.get("/join", (req, res) => {
    res.render('join', { basedir: __dirname })
})

// join post route for collecting the username to save in the cookie
router.post('/join', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
})

// login route loads login
router.get("/login", (req, res) => {
    res.render('login', { basedir: __dirname })
})

module.exports = router