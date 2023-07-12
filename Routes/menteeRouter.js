const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const MenteeController = require('../Controllers/menteeProfileController')
const auth = require("../middleware/auth")

router.post('/', auth, upload.single('avatar'), MenteeController.addNewMentee)
router.get('/', auth, MenteeController.getAllMentee)
router.get('/:id', auth, MenteeController.getMentee)
router.patch('/:id', auth, upload.single('avatar'), MenteeController.updateMentee)
router.delete('/:id', auth, MenteeController.removeMentee)

module.exports = router
