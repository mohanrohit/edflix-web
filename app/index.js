const express = require("express");
const session = require("express-session");
const axios = require("axios");
const bodyParser = require("body-parser");

const controllers = require("./app/controllers");

// require("./config/passport")(passport);

const app = express();

app.set("view engine", "ejs");
app.set("views", `${__dirname}/app/views`);

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({extended: true}));

/*
app.use((request, response, next) => {
    response.locals.user = request.session.user;
    console.log(`user is:`);
    console.log(response.locals.user);
    return next();
});
*/

app.get("/", (request, response) => {
    response.render("index");
});

app.use("/items", controllers.items);
app.use("/users", controllers.users);

module.exports = app;
