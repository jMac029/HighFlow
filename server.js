const express = require("express")
const bodyParser = require("body-parser")
    //const methodOverride = require("method-override")
const cookieParser = require("cookie-parser");

const app = express()
const PORT = process.env.PORT || 8080

let db = require("./models")

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

// cookie parser for reading the browser cookie
app.use(cookieParser())

// app.use(methodOverride("_method"))

// PUG!
app.set('view engine', 'pug')

// Routes
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(() => {
    return db.Grower.create({
        grower_name: "McMillan Farms",
        city: "Forbestown",
        state: "CA",
        email: "mcmillan_farms@example.com",
        bio: "Jesus told me to do it.",
        grow_method: "I plant in the best soil known to man Chicken Manuare and Steer Manuare blend.",
        indoor: false,
        strains: "Sativa and Indiga",
        cycle: "every september/october"
    })
    return db.Dispenser.create({
        grower_name: "McMillan Greens",
        city: "San Francisco",
        state: "CA",
        email: "mcmillan_greens@example.com",
        bio: "Jesus told me to do it.",
        strains_wanted: "Sativa and Indiga"
    })
    app.listen(PORT, () => {
        console.log("App listening on PORT " + PORT);
    })
})