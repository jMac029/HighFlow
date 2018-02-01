let db = require("../models");

module.exports = function(app) {
    app.get("/api/dispensers", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Product
        db.Dispenser.findAll({
            include: [db.Product]
        }).then(function(dbDispenser) {
            res.json(dbDispenser);
        });
    });

    app.get("/api/dispensers/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Product
        db.Dispenser.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Product]
        }).then(function(dbDispenser) {
            res.json(dbDispenser);
        });
    });

    app.post("/api/dispensers", function(req, res) {
        db.Dispenser.create(req.body).then(function(dbDispenser) {
            res.json(dbDispenser);
        });
    });

    app.delete("/api/dispensers/:id", function(req, res) {
        db.Dispenser.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbDispenser) {
            res.json(dbDispenser);
        });
    });

};