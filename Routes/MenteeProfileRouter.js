const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const MenteeController = require('../Controllers/MenteeProfileController')
const auth = require("../middleware/auth")

router.post('/menteeProfile', auth, upload.single('avatar'), MenteeController.addNewMentee)
router.get('/menteeProfile', auth, MenteeController.getAllMentee)
router.get('/menteeProfile/:id', auth, MenteeController.getMentee)
router.patch('/menteeProfile/:id', auth, upload.single('avatar'), MenteeController.updateMentee)
router.delete('/menteeProfile/:id', auth, MenteeController.removeMentee)

module.exports = router
