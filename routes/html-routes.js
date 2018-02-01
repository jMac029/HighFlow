// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");

// Routes
// =============================================================
module.exports = (app) => {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/main.html"));
    });

    // growers route loads growers.html
    app.get("/growers", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/growers.html"));
    });

    // dispensers route loads dispensers.html
    app.get("/dispensers", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/dispensers.html"));
    });

};