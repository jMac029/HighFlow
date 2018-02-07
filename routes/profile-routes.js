const express = require('express')
const router = express.Router()
const path = require("path")

let db = require("../models");

router.get("/profile/:username", (req, res) => {
    const name = req.cookies.username
    const business_name = req.cookies.business_name
    if (name) {
        db.Grower.findAll({
            where: {
                username: req.params.username
            },
            limit: 1
        }).then(function(dbGrower) {
            //console.log(dbGrower.dataValues)
            // let growers = dbGrower
            // console.log(growers)
            res.render('profile', { name, business_name, dbGrower });
            //res.json(dbGrower);
        });
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

// router.delete("/api/growers/:id", (req, res) => {
//     db.Grower.destroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(function(dbGrower) {
//         res.json(dbGrower);
//     });
// });

module.exports = router