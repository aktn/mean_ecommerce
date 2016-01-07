var express = require('express');
var controller = require('./auth.service');
var router = express.Router();

router.post('/', controller.auth);

module.exports = router;