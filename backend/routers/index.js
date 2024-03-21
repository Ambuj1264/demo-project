const express = require("express");

const auth = require("../controller/index");
const route = express.Router();

route.post("/login", auth.login);
route.post("/signup", auth.signup);
route.post("/googleproviderLogin", auth.googleproviderLogin);
module.exports = route;
