let db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the products
    app.get("/api/products", function(req, res) {
        var query = {};
        if (req.query.author_id) {
            query.AuthorId = req.query.author_id;
        }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Product.findAll({
            where: query,
            include: [db.Author]
        }).then(function(dbProduct) {
            res.json(dbProduct);
        });
    });

    // Get rotue for retrieving a single Product
    app.get("/api/products/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Author]
        }).then(function(dbProduct) {
            res.json(dbProduct);
        });
    });

    // Product route for saving a new Product
    app.post("/api/products", function(req, res) {
        db.Product.create(req.body).then(function(dbProduct) {
            res.json(dbProduct);
        });
    });

    // DELETE route for deleting products
    app.delete("/api/products/:id", function(req, res) {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbProduct) {
            res.json(dbProduct);
        });
    });

    // PUT route for updating products
    app.put("/api/products", function(req, res) {
        db.Product.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbProduct) {
            res.json(dbProduct);
        });
    });
};