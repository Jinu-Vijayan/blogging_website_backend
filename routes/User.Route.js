const express = require("express");
const { signUp, logIn, logOut } = require("../controller");
const {passport} = require("../middleware")

const UserRoute = express.Router();

UserRoute.post("/auth/SignUp",signUp);

UserRoute.post("/auth/login",logIn);

UserRoute.post("/auth/logout",passport.authenticate('jwt', { session: false }),logOut);

module.exports = UserRoute;