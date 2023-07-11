const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const auth = require('../middleware/auth');
const { authOpp } = require('../middleware/reqAndOpp')
const opportunityController = require('../Controllers/opportunityController');

router.get('/', auth, authOpp, asyncHandler(opportunityController.getAllOpportunities));
router.get('/:id', auth, authOpp, asyncHandler(opportunityController.getOpportunityById));
router.patch('/:id', auth, authOpp, asyncHandler(opportunityController.updateOpportunity));
router.post('/', auth, authOpp, asyncHandler(opportunityController.createOpportunity));
router.delete('/:id', auth, authOpp, asyncHandler(opportunityController.deleteOpportunity));

module.exports = router;
