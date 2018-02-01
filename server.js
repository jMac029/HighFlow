const express = require("express")
const bodyParser = require("body-parser")

    //const methodOverride = require("method-override")

const app = express()
const PORT = process.env.PORT || 8080

let db = require("./models")

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json());

// app.use(methodOverride("_method"))

// Set Handlebars. In case we want to use Handlebars
// const exphbs = require("express-handlebars")

// app.engine("handlebars", exphbs({ defaultLayout: "main" }))
// app.set("view engine", "handlebars")
//using pug - lea
app.set('view engine', 'pug');




app.get('/', function (req, res) {
    res.render('about', {basedir: __dirname});
  });



// Routes
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});