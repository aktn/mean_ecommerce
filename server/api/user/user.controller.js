var User = require('./user.model');
var path = require('path');

exports.index = function(req, res){
    User.find({}, function(err, users){
        if(err) res.send(err);
        res.json(users);
    });
};

exports.show = function(req, res){
    User.findById(req.params.id, function(err, user){
        if(err) res.send(err);
        res.json(user);
    });
};

exports.create = function(req, res){
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function(err){
        if(err) res.send(err);
        res.json({message: 'User has been created!'});
    });
};

exports.update = function(req, res){
    User.findById(req.params.id, function(err, user){
        if(err) res.send(err);

        if(req.body.name) user.name = req.body.name;
        if(req.body.email) user.email = req.body.email;
        if(req.body.password) user.password = req.body.password;

        user.save(function(err){
            if(err) res.send(err);
            res.json({message: "User has been updated!"});
        });
    });
};

exports.destroy = function(req, res) {
    User.remove({
        _id: req.params.id
    },function(err){
        if(err) res.send(err);
        res.json({message : 'User has been deleted!'});
    });
};