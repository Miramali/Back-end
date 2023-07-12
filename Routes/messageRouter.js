const messageController = require("../Controllers/messageController");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/receiver/:id", auth, messageController.getReceiverMessages);
router.get("/sender/:id", auth, messageController.getSenderMessages);

// /search for most relavent, /searchD for search by newest
router.get("/search", auth, messageController.searchMessages);
router.get("/searchNewest", auth, messageController.searchMessagesByDate);

router.post("/:id", auth, messageController.createMessage);
router.get("/:id", auth, messageController.getMessageById);

module.exports = router;
