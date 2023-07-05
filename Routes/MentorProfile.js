const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const MentorController = require('../Controllers/MentorController')
const auth = require("./../middleware/auth")



router.post('/mentorProfile' ,auth, upload.single('avatar') , MentorController.addNewMentor)
router.get('/mentorProfile' , MentorController.getAllMentor)
router.get('/mentorProfile/:id' ,  MentorController.getMentor)
router.patch('/mentorProfile/:id' ,upload.single('avatar') ,  MentorController.updateMentor)
router.delete('/mentorProfile/:id' ,  MentorController.removeMentor)





module.exports = router
