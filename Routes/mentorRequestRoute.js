const router = require("express").Router();
const homeController = require("../Controllers/mentorRequestController");
const auth=require("../middleware/auth")


router.post("/requests",auth, homeController.postRequests);
router.get("/requests", auth,homeController.getRequests);
router.get("/requests/:id",auth,homeController.getRequestsByID );
router.patch("/requests/:id",auth, homeController.patchRequets);
router.delete("/requests/:id",auth,homeController.deleteRequests)

module.exports = router;
