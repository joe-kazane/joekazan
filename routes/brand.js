const express = require('express');

const brandController = require('../controllers/brand');

const router = express.Router();
router.get('/details/:name',brandController.details);
router.get('/delete/:name',brandController.delete);
router.get('/update/:name',brandController.getupdate);
router.post('/update/:name',brandController.postupdate);
router.get('/add',brandController.getAdd);
router.post('/add',brandController.postAdd);
router.get('/list',brandController.list);
router.use(brandController.home);
module.exports = router;