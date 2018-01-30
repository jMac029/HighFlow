let db = require("../models");

module.exports = function(app) {
    app.get("/api/growers", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Product
        db.Grower.findAll({
            include: [db.Product]
        }).then(function(dbGrower) {
            res.json(dbGrower);
        });
    });

    app.get("/api/growers/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Product
        db.Grower.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Product]
        }).then(function(dbGrower) {
            res.json(dbGrower);
        });
    });

    app.Product("/api/growers", function(req, res) {
        db.Grower.create(req.body).then(function(dbGrower) {
            res.json(dbGrower);
        });
    });

    app.delete("/api/growers/:id", function(req, res) {
        db.Grower.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbGrower) {
            res.json(dbGrower);
        });
    });

};