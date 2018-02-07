const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

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


//using pug - lea
app.set('view engine', 'pug');


// Routes
const mainRoutes = require('./routes')
const growerRoutes = require('./routes/grower-api-routes.js')
const dispenserRoutes = require('./routes/dispenser-api-routes.js')
const profileRoutes = require('./routes/profile-routes.js')

app.use(mainRoutes)
app.use(growerRoutes)
app.use(dispenserRoutes)
app.use(profileRoutes)

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("App listening on PORT " + PORT);
    })
})