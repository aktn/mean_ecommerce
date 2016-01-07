var path = require('path');

module.exports = function(app) {

    app.use('/api/products', require('./api/product'));
    app.use('/api/admin', require('./api/admin'));
    app.use('/api/users', require('./api/user'));
    app.use('/api/login', require('./auth'));
    // app.use('/auth', require('./auth'));
};