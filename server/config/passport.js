const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const userFunctions = require('../routes/users');

module.exports = (passport) => {
  passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
  }, (username, password, done) => {
    // Match Username
    let query = { email: username };
    User.findOne(query, (err, user) => {
      if (err) throw err;
      if (!user) {
        return done(null, false, { "error": "No user found" });
      }

      // Match Password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          return done(null, user, { });
        } else {
          return done(null, false, { "error": "Wrong password" });
        }
      }); // End Brcypt
    }); // End Euser FindOne
  })); // End Local Strategy

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
}
