const passport = require("passport");
const { UserModel } = require("../model");
const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET_KEY;

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {

    UserModel.findOne({id: jwt_payload.sub})
    .then((user, err) => {
        if (err || user.token === null) {
            return done(err, false);
        }
        if (user) {
            console.log("user exists")
            return done(null, user);
        } else {
            console.log("user not present");
            return done(null, false);
            // or you could create a new account
        }
    })
    .catch((err)=>{
        console.log(err);
    });

}));

module.exports = {
    passport
}