const express = require("express");
const { signUp, logIn, logOut } = require("../controller");

const UserRoute = express.Router();

UserRoute.post("/auth/SignUp",signUp);

UserRoute.post("/auth/login",logIn);

UserRoute.post("/auth/logout",logOut);

module.exports = UserRoute;