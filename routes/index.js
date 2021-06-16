//store our all paths
const express = require('express');

const router = express.Router();
const homeController = require('../controller/home_controller')
console.log("router loaded");


router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/form',require('./form'))

module.exports = router;