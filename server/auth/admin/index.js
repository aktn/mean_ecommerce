var express = require('express');
var controller = require('./admin-auth.service.js');
var router = express.Router();

router.post('/', controller.auth);

module.exports = router;

/*

router.use(function(req, res, next) {

    console.log('Testing');
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {

        jwt.verify(token, superSecret, function(err, decoded) {

            if (err) {
                res.status(403).send({
                    success: false,
                    message: 'Token Failed to Authenticate.'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });

    } else {
        res.status(403).send({
            success: false,
            message: 'There is no token.'
        });

    }
});*/