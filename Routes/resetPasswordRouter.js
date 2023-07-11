const express = require("express");
const router = express.Router();
const resetPassword = require('../Controllers/resetPasswordController');

router.post('/:id/:token', resetPassword)

module.exports = router;