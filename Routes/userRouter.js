const express = require("express");
const { register, login, getUser, logout, logoutAll } = require("../Controllers/userController");
const auth = require('../middleware/auth');

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.post("/logout", auth, logout);
router.post("/logout-all", auth, logoutAll);


router.get("/user/:id", auth, getUser);

module.exports = router;
