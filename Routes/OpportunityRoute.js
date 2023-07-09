const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const auth = require('../middleware/auth');
const { authOpp } = require('../middleware/reqAndOpp')
const opportunityController = require('../Controllers/opportunityController');

router.get('/opp', auth, authOpp, asyncHandler(opportunityController.getAllOpportunities));
router.get('/opp/:id', auth, authOpp, asyncHandler(opportunityController.getOpportunityById));
router.patch('/opp/:id', auth, authOpp, asyncHandler(opportunityController.updateOpportunity));
router.post('/opp', auth, authOpp, asyncHandler(opportunityController.createOpportunity));
router.delete('/opp/:id', auth, authOpp, asyncHandler(opportunityController.deleteOpportunity));

module.exports = router;
