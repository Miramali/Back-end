const express = require('express');
const subscribeToNewsletter = require('../Controllers/newsletterController');

const router = express.Router()

router.post('/', subscribeToNewsletter)

module.exports = router;