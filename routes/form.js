const express = require('express');

const router = express.Router();

const form_Controller = require('../controller/form_controller');

router.post('/submited',form_Controller.create)


module.exports = router;