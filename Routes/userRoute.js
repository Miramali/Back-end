const express = require("express");
const { register, login, getUser, edit } = require("../Controllers/userController");
const auth = require('../middleware/auth');

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);


router.get("/user/:id", auth, getUser);

module.exports = router;
