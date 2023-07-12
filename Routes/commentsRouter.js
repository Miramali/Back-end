const express = require("express")
const Comment = require('../Controllers/commentsController')

const auth = require("../middleware/auth");
const router = express.Router()
router.post("/:mentorApplicationId", auth, Comment.addComment);
router.delete("/:commentId", auth, Comment.deleteComment);
router.get("/:mentorApplicationId", Comment.getComment);
module.exports = router