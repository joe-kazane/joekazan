const express = require('express');

const categoryController = require('../controllers/category');
const router = express.Router();
router.get('/details/:name',categoryController.details);
router.get('/delete/:name',categoryController.delete);
router.get('/update/:name',categoryController.getupdate);
router.post('/update/:name',categoryController.postupdate);
router.get('/add',categoryController.getAdd);
router.post('/add',categoryController.postAdd);
router.use(categoryController.home);
module.exports = router;