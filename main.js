const express = require("express");
const axios = require("axios");
const passport = require("passport");
var flash = require("connect-flash");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");

var controllers = require("./app/controllers");

// require("./config/passport")(passport);

const app = express();

app.set("view engine", "ejs");
app.set("views", `${__dirname}/app/views`);

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({secret: "some-secret"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((request, response, next) => {
    response.locals.user = request.session.user;
    console.log(`user is:`);
    console.log(response.locals.user);
    return next();
});

app.get("/", (request, response) => {
    response.render("index");
});

app.use("/items", controllers.items);
app.use("/users", controllers.users);

app.listen(process.env.PORT || 8081, () => {
    console.log("Serving the edflix-web application");
});
