const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const MenteeController = require('../Controllers/MenteeProfileController')
const auth = require("../middleware/auth")

router.post('/mentee', auth, upload.single('avatar'), MenteeController.addNewMentee)
router.get('/mentee', auth, MenteeController.getAllMentee)
router.get('/mentee/:id', auth, MenteeController.getMentee)
router.patch('/mentee/:id', auth, upload.single('avatar'), MenteeController.updateMentee)
router.delete('/mentee/:id', auth, MenteeController.removeMentee)

module.exports = router
