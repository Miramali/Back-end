const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");


const router = express.Router();
const CLIENT_URL = "http://localhost:3000/";
router.get("/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/google/callback",
  passport.authenticate("google",
    { failureRedirect: "/login" },
    (req, res) => {
      const token = jwt.sign({ userId: req.user.id }, process.env.AUTH_KEY);
      res.redirect(CLIENT_URL);
    }
  ));

router.get("/github", passport.authenticate("linkedin"));

router.get("/github/callback",
  passport.authenticate("github",
    { failureRedirect: "/login" },
    (req, res) => {
      const token = jwt.sign({ userId: req.user.id }, process.env.AUTH_KEY);
      res.redirect(CLIENT_URL);
    }
  ));

router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook",
    { failureRedirect: "/login" },
    (req, res) => {
      const token = jwt.sign({ userId: req.user.id }, process.env.AUTH_KEY);
      res.redirect(CLIENT_URL);
    }
  ));

module.exports = router;