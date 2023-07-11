const forgetPassword=require('../Controllers/forgetPasswordController');
const express = require("express");
const router = express.Router();

router.post('/', forgetPassword)

module.exports = router;
