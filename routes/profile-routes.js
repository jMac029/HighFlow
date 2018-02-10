const express = require('express')
const router = express.Router()
const path = require("path")
const dialog = require('dialog')

let db = require("../models")

router.get("/profile/:username", (req, res) => {
    const name = req.cookies.username
    const business_name = req.cookies.business_name
    const usertype = req.cookies.usertype
    if (name) {
        if (usertype === "grower") {
            db.Grower.findAll({
                where: {
                    username: req.params.username
                },
                limit: 1
            }).then(function(dbGrower) {
                //console.log(dbGrower.dataValues)
                // let growers = dbGrower
                // console.log(growers)
                res.render('profile', { name, business_name, usertype, dbGrower });
                //res.json(dbGrower);
            }).catch((err) => {
                console.log(err)
                dialog.err(err, 'Error', res.redirect('/'))
            })
        } else {
            db.Dispenser.findAll({
                where: {
                    username: req.params.username
                },
                limit: 1
            }).then(function(dbDispenser) {
                //console.log(dbGrower.dataValues)
                // let growers = dbGrower
                // console.log(growers)
                res.render('profile', { name, business_name, usertype, dbDispenser });
                //res.json(dbGrower);
            }).catch((err) => {
                console.log(err)
                dialog.err(err, 'Error', res.redirect('/'))
            })
        }
    } else {
        res.redirect('/join');
    }
});

// router.post('/api/growers', (req, res) => {
//     res.cookie('username', req.body.username)
//     res.cookie('business_name', req.body.business_name)
//     db.Grower.create({
//             username: req.body.username,
//             grower_name: req.body.business_name,
//             license: req.body.grower_license,
//             city: req.body.grower_city,
//             state: req.body.grower_state,
//             email: req.body.grower_email,
//             system: req.body.grower_system,
//             about: req.body.grower_about,
//             strains: req.body.grower_strains,
//             cycle: req.body.grower_cycle,
//             webpage: req.body.grower_web,
//             image: req.body.grower_img
//         }).then((dbGrower) => {
//             // res.cookie('username', req.body.username)
//             res.redirect('/growers')
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// })

// router.delete("/profile/:id", (req, res) => {
//     console.log(req.body)
//     db.Grower.destroy({
//         where: {
//             id: req.body.grower.username
//         }
//     }).then(function(dbGrower) {
//         res.json(dbGrower);
//     });
// });

module.exports = router