const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/login", async (request, response) => {
    response.render("users/login");
});

router.post("/login", async (request, response) => {
    // login the user here
});

router.get("/signup", async (request, response) => {
    response.render("users/signup");
});

router.post("/signup", async (request, response) => {
    var name = request.body.name;
    var password = request.body.password;
    var email = request.body.email;
    var salt = bcrypt.genSaltSync(8);

    var hash = bcrypt.hashSync(password, salt, null);

    var user = await axios.post("http://localhost:8080/api/v1/users", {
        name: name,
        password: hash,
        salt: salt,
        email: email
    });

    request.session.user = user;

    response.redirect("/");
});

router.get("/logout", async (request, response) => {
    request.logout();

    response.redirect("/");
});

module.exports = router;
