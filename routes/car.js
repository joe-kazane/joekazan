const express = require('express');

const carController = require('../controllers/car');

const router = express.Router();
router.get('/update/:title', carController.getupdate);
router.post('/update/:title',carController.postupdate);
router.get('/delete/:title', carController.delete);
router.get('/list',carController.getlist);
router.post('/list',carController.postlist);
router.post('/add',carController.Add);
router.use('/',carController.home);
module.exports = router;