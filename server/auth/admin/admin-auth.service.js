var Admin = require('../../api/admin/admin.model.js');
var path = require('path');
var jwt = require('jsonwebtoken');
var config     = require('../../config/env/development');
var superSecret = config.secret;

function isAuthenticated(req, res) {

    Admin.findOne({
        username: req.body.username
    }).select('username name email role password').exec(function(err, user) {

        if (err) throw err;
        if (!user) {
            res.json({
                success: false,
                message: 'ERROR Occured!'
            });
        } else if (user) {

            var validPassword = user.comparePassword(req.body.password);
            if (!validPassword) {
                res.json({
                    success: false,
                    message: 'ERROR Occured!'
                });
            } else {

                var token = jwt.sign({
                    name: user.name,
                    username: user.username
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