var Product = require('./product.model');
var path = require('path');

exports.index = function(req, res){
    Product.find({}, function(err, products) {
        if (err) res.send(err);
        res.json(products);
    });
};

exports.show = function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (err) res.send(err);
        res.json(product);
    });
};

exports.create = function(req, res) {
    var item = new Product();
    item.title = req.body.title;
    item.price = req.body.price;
    item.stock = req.body.stock;
    item.description = req.body.description;
    item.imageBin = req.body.imageBin;
    item.imageUrl = req.body.imageUrl;

    item.save(function(err) {
        if (err) return res.send(err);
        res.json({ message: 'Product Added !' });
    });
};

exports.update = function(req, res){
    Product.findById(req.params.id, function(err, item) {

        if (err) res.send(err);

        if (req.body.title) item.title = req.body.title;
        if (req.body.stock) item.stock = req.body.stock;
        if (req.body.price) item.price = req.body.price;
        if (req.body.description) item.description = req.body.description;
        //  if (req.body.imageBin) item.imageBin = req.body.imageBin;
        if (req.body.imageUrl) item.imageUrl = req.body.imageUrl;

        item.save(function(err) {
            if (err) res.send(err);
            res.json({ message: 'Item has been updated!' });
        });

    });
};

exports.destroy = function(req, res){
    Product.remove({
        _id: req.params.id
    }, function(err) {
        if (err) res.send(err);
        res.json({ message: 'Item Successfully Deleted' });
    });
};
