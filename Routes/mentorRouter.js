const router = require("express").Router();
const { PostMentor, GetMentors, getById, PatchMentor, DeleteMentor } = require('../Controllers/mentorProfileController');
const auth = require('../middleware/auth');

router.post("/", auth, PostMentor);
router.get("/", auth, GetMentors);
router.get("/:id", auth, getById);
router.patch("/:id", auth, PatchMentor);
router.delete("/:id", auth, DeleteMentor)

module.exports = router;
