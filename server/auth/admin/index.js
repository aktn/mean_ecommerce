var express = require('express');
var controller = require('./admin-auth.service.js');
var router = express.Router();

router.post('/', controller.auth);

module.exports = router;