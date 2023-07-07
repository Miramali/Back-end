const express = require("express");
const router = express.Router();
const calendarController = require("../Controllers/calender");
const auth = require("../middleware/auth");

router.get("/", auth, calendarController.getCalendar);

module.exports = router;
