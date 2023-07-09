const router = require("express").Router();
const homeController = require("../Controllers/mentorRequestController");
const auth=require("../middleware/auth")
const {authReq} = require("../middleware/reqAndOpp")
const asyncHandler = require('express-async-handler');


router.post("/requests", auth, authReq, asyncHandler(homeController.postRequests));
router.get("/requests", auth, asyncHandler(homeController.getRequests));
router.get("/requests/:id", auth, authReq, asyncHandler(homeController.getRequestsByID));
router.patch("/requests/:id", auth, authReq, asyncHandler(homeController.patchRequets));
router.delete("/requests/:id", auth, authReq, asyncHandler(homeController.deleteRequests))

module.exports = router;
