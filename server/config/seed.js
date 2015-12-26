var User = require('../api/user/user.model');
var Admin = require('../api/admin/admin.model');
var Product = require('../api/product/product.model');

User.find({}).remove(function(){
    User.create({
            name: 'Johnny',
            email: 'johnny@yahoo.com',
            password: 'johnny'
        },{
            name: 'Ammy',
            email: 'Ammy@yahoo.com',
            password: 'Ammy'},
        function()
        {
            console.log('User data has been seeded!');
        });
});

Admin.find({}).remove(function(){
    Admin.create({
            name: 'bart',
            username: 'ElBarto',
            email: 'bart@gmail.com',
            password: 'bart',
            role: 'staff'
        },{
            name: 'lisa',
            username: 'lisa',
            email: 'lisa@gmail.com',
            password: 'lisa',
            role: 'manager'},
        function()
        {
            console.log('Admin data has been seeded!');
        });
});

Product.find({}).remove(function(){
    Product.create({
            title: 'mouse',
            stock: 5,
            price: 30,
            description: 'Suitable for all users',
            imageUrl: '/assets/uploads/1.jpg'
        },{
            title: 'lens',
            stock: 10,
            price: 8,
            description: 'Suitable for all users',
            imageUrl: '/assets/uploads/1.jpg'},
        function()
        {
            console.log('Product data has been seeded!');
        });
});
