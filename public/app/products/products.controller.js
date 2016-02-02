angular.module('productCtrl',['productService'])

    .controller('productController', function(Product){
        var pc = this;
        pc.processing = true;

        Product.all()
            .success(function(data){
                pc.processing = false;
                pc.products = data;
            });

    })

    .controller('productDetailsController', function($routeParams, Product) {

        var pdc = this;

        Product.get($routeParams.product_id)
            .success(function(data) {
                pdc.productData = data;
            });
    });



