const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const bcrypt = require("bcrypt");

~~~~~~~~~~~~~~~~~~
// GET (sign-up)
~~~~~~~~~~~~~~~~~~
router.get("/sign-up", (req, res) => {
  res.render("auth/sign-up.ejs");
});

~~~~~~~~~~~~~~~~~~
// GET (sign-in)
~~~~~~~~~~~~~~~~~~
router.get("/sign-in", (req, res) => {
  res.render("auth/sign-in.ejs");
});

~~~~~~~~~~~~~~~~~~
// POST (sign-up)
~~~~~~~~~~~~~~~~~~
router.post("/sign-up", async (req, res) => {
  const userInDatabase = await User.findOne({ username: req.body.username });
  if (userInDatabase) {
    return res.send("Username already taken.");
  }
  if (req.body.password !== req.body.confirmPassword) {
    return res.send("Password and Confirm Password must match");
  }
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashedPassword;

  // validation logic
  const user = await User.create(req.body);
  req.session.user = {
    username: user.username,
  };
  
  req.session.save(() => {
    res.redirect("/");
  });
  res.send(`Form submission accepted!  Welcome ${user.username}!`);
});

~~~~~~~~~~~~~~~~~~
// POST (sign-in)
~~~~~~~~~~~~~~~~~~
router.post("/sign-in", async (req, res) => {
  const userInDatabase = await User.findOne({ username: req.body.username });
  if (!userInDatabase) {
    return res.send("Login failed. Please try again.");
  }
  // There is a user! Time to test their password with bcrypt
  const validPassword = bcrypt.compareSync(
    req.body.password,
    userInDatabase.password
  );
  if (!validPassword) {
    return res.send("Login failed. Please try again.");
  }
  req.session.user = {
    username: userInDatabase.username,
    _id: userInDatabase._id
  };

  req.session.save(() => {
    res.redirect("/");
  });
});

~~~~~~~~~~~~~~~~~~
// GET (sign-out)
~~~~~~~~~~~~~~~~~~
router.get("/sign-out", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});



module.exports = router;