angular.module('productCtrl',['productService'])

    .controller('productController', function(Product){
        var vm = this;
        vm.processing = true;

        Product.all()
            .success(function(data){
                vm.processing = false;
                vm.products = data;
            });

    })

    .controller('productDetailsController', function($routeParams, Product) {

        var vm = this;
        vm.type = 'edit';

        Product.get($routeParams.product_id)
            .success(function(data) {
                vm.productData = data;
            });
    });



