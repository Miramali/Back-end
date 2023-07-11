const express = require("express");
const messageController = require("../Controllers/messageController");
const auth = require("../middleware/auth");
const router = express.Router();
// const upload = multer({ dest: 'uploads/' });

router.post("/:senderId", auth, messageController.createMessage);
router.get("/:id", auth, messageController.getMessagesById);
router.get("/", auth, messageController.getMessagesBySender);

module.exports = router;
