var bodyParser = require('body-parser');
var express = require('express');
var controller = require('./user-auth.service.js');
var router = express.Router();

var User = require('../../api/user/user.model.js');
var path = require('path');
var jwt = require('jsonwebtoken');
var config     = require('../../config/env/development');
var compose = require('composable-middleware');
var superSecret = config.secret;



var apiRouter = express.Router();
apiRouter.post('/', function isAuthenticated(req, res) {

    User.findOne({
        email: req.body.email
    }).select('name email password').exec(function(err, user) {

        if (err) throw err;
        if (!user) {
            res.json({
                success: false,
                message: 'User with that email does not exist'
            });
        } else if (user) {

            var validPassword = user.comparePassword(req.body.password);
            if (!validPassword) {
                res.json({
                    success: false,
                    message: 'Invalid password.'
                });
            } else {
                var token = jwt.sign({
                   // name: user.name,
                    email: user.email
                }, superSecret, {
                    expiresInMinutes: 120
                });

                res.json({
                    success: true,
                    message: 'Token is ready!',
                    token: token
                });
            }

        }

    });
});


apiRouter.use(function(req, res, next) {

    console.log('Somebody just came to our app!');
   
    var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];


    if (token) {

        jwt.verify(token, superSecret, function(err, decoded) {

            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });    
            } else {
                req.decoded = decoded;
                next();
            }
        });

    } else {
        res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});

apiRouter.get('/me', function(req, res) {
    res.send(req.decoded);
});

//testing
apiRouter.get('/test', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });
});


   

module.exports = apiRouter;

