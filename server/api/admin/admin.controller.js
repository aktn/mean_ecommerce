var Admin = require('./admin.model');
var path = require('path');

exports.index = function(req, res){
    Admin.find({}, function(err, admins){
        if(err) res.send(err);
        res.json(admins);
    });
};

exports.show = function(req, res){
    Admin.findById(req.params.id, function(err, admin){
        if(err) res.send(err);
        res.json(admin);
    });
};

exports.create = function(req, res){
    var admin = new Admin();

    admin.name = req.body.name;
    admin.username = req.body.username;
    admin.email = req.body.email;
    admin.role = req.body.role;
    admin.password = req.body.password;

    admin.save(function(err){
        if(err) res.send(err);
        res.json({message: 'Admin Successfully Created!'});
    });
};

exports.update = function(req, res){
    Admin.findById(req.params.id, function(err, admin){

        if(err) res.send(err);

        if(req.body.name) admin.name = req.body.name;
        if(req.body.username) admin.username = req.body.username;
        if(req.body.email) admin.email = req.body.email;
        if(req.body.role) admin.role = req.body.role;
        if(req.body.password) admin.password = req.body.password;

        admin.save(function(err){
            if(err) res.send(err);
            res.json({message : 'Updated!'});
        });
    });
};

exports.destroy = function(req, res){
    Admin.remove({
        _id: req.params.id
    }, function(err) {
        if (err) res.send(err);
        res.json({ message: 'Admin Deleted' });
    });
};
