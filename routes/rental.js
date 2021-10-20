const express = require('express');

const rentalController = require('../controllers/rental');

const router = express.Router();
router.use(rentalController.home);
module.exports = router;