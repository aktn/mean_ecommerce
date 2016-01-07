var User = require('../api/user/user.model');
var path = require('path');
var jwt = require('jsonwebtoken');
var config     = require('../config/env/development');
var superSecret = config.secret;

function isAuthenticated(req, res) {

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
                    name: user.name,
                    username: user.email
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

}



exports.auth = isAuthenticated;