const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');
const coustomerController = require('../controllers/coustomerController');



//apis for get, delete and create coustomer

router.get('/coustomer/get', coustomerController.getActiveCustomers);
router.delete('/coustomer/delete/:customerID', coustomerController.deleteCoustomer);
router.post('/coustomer/create', coustomerController.createCoustomer);

router.get('/card/get', cardController.getAllCards);

router.post('/card/create', cardController.createCard);

module.exports = router; 