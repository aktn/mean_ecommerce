var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config/env/development');
var path = require('path');

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.use(morgan('dev'));

mongoose.connect(config.mongo.database);

app.use(express.static(__dirname+'/../public'));

app.get('/a', function(req, res) {
    res.send('Welcome to the home page!');
});

if (config.seedDB) {
    console.log('Seeding Database');
    require('./config/seed');
}

require('./routes')(app);


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/app/main/main.html'));
});

app.listen(config.port);
console.log('Server running on port'+config.port);