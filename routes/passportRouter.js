/* jshint esversion: 6 */
const express        = require("express");
const router         = express.Router();
// User model
const User           = require("../models/user");
// Routine model
const Routine        = require("../models/routine");
// Bcrypt to encrypt passwords
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;
const ensureLogin = require("connect-ensure-login");
const passport      = require("passport");




router.get("/home-page", ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render("passport/home", { user: req.user });
});
// *************************   SIGNUP ******************
router.get("/signup", (req, res, next) => {
  res.render("passport/signup");
});

router.post("/signup", (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  if( username === "" || password === ""){
    res.render("passport/signup", {
      errorMessage: "Username or Password are empty !!"
    });
    return;
  }
  User.findOne({ username }, "username", (err, user) => {
  if (user !== null) {
    res.render("passport/signup", { message: "The username already exists" });
    return;
  }

  const salt     = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  const newUser = User({
    username: username,
    password: hashPass
  });

    newUser.save((err) => {
      if (err) {
        res.render("passport/signup", { message: "Something went wrong" });
      } else {
        res.redirect("/");
      }
    });
  });
});

// ***************** LOGIN  ***********************

router.get("/login", (req, res, next) => {
  res.render("passport/login");
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/home-page",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

// ***************** ICONS ***************




function assignIcons(rutinas) {

  var icon;
  rutinas.forEach(function(ejercicio){
    switch (ejercicio.title) {
      case "Run":
        icon = "directions_run";
        break;
      case "Swim":
        icon = "pool";
        break;
      case "Bike":
        icon = "directions_bike";
        break;
      case "Rest Day":
        icon = "hot_tub";
        break;
    }
    ejercicio.icon = icon;
  });
}


// ***************** WEEK 1 *********************
router.get("/home-page/week1", ensureAuthenticated, (req, res, next) => {
  Routine.find({"week":{$all: [1]}},(err,routine) => {
    if(err){return next(err);}

    var allRoutines = routine;
    assignIcons(allRoutines);
    res.render("passport/week", {routines: allRoutines, title:"WEEK 1"});
  });
});

// router.get('/home-page', ensureAuthenticated, (req, res) => {
//   res.render('home-page', {user: req.user} );
// });

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/');
  }
}

// **************** WEEK 2  *********************
router.get("/home-page/week2", ensureAuthenticated, (req, res, next) => {
  Routine.find({"week":{$all: [2]}},(err,routine) => {
    if(err){return next(err);}

    var allRoutines = routine;
    assignIcons(allRoutines);

    res.render("passport/week", {routines: allRoutines, title:"WEEK 2"});
  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

// ***************** WEEK 3 ****************
router.get("/home-page/week3", ensureAuthenticated, (req, res, next) => {
  Routine.find({"week":{$all: [3]}},(err,routine) => {
    if(err){return next(err);}

    var allRoutines = routine;
    assignIcons(allRoutines);

    res.render("passport/week", {routines: allRoutines, title:"WEEK 3"});
  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

// ***************** WEEK 4 ****************
router.get("/home-page/week4", ensureAuthenticated, (req, res, next) => {
  Routine.find({"week":{$all: [4]}},(err,routine) => {
    if(err){return next(err);}

    var allRoutines = routine;
    assignIcons(allRoutines);

    res.render("passport/week", {routines: allRoutines, title:"WEEK 4"});
  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

// ***************** WEEK 5 ****************
router.get("/home-page/week5", ensureAuthenticated, (req, res, next) => {
  Routine.find({"week":{$all: [5]}},(err,routine) => {
    if(err){return next(err);}

    var allRoutines = routine;
    assignIcons(allRoutines);

    res.render("passport/week", {routines: allRoutines, title:"WEEK 5"});
  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

// ***************** WEEK 6 ****************
router.get("/home-page/week6", ensureAuthenticated, (req, res, next) => {
  Routine.find({"week":{$all: [6]}},(err,routine) => {
    if(err){return next(err);}

    var allRoutines = routine;
    assignIcons(allRoutines);

    res.render("passport/week", {routines: allRoutines,  title:"WEEK 6"});
  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

// ***************** WEEK 7 ****************
router.get("/home-page/week7", ensureAuthenticated, (req, res, next) => {
  Routine.find({"week":{$all: [7]}},(err,routine) => {
    if(err){return next(err);}

    var allRoutines = routine;
    assignIcons(allRoutines);

    res.render("passport/week", {routines: allRoutines, title:"Last"});
  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

// *******************************************************************

module.exports = router;
