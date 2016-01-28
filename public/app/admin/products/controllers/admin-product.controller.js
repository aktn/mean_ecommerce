angular.module('adminProductCtrl',['adminProductService'])

    .controller('admin_ProductController', function(Product){
        var vm = this;
        vm.processing = true;

        Product.all()
            .success(function(data){
                vm.processing = false;
                vm.products = data;
            });

    })

    .controller('admin_ProductDetailsController', function($routeParams, Product) {

        var vm = this;


        Product.get($routeParams.product_id)
            .success(function(data) {
                vm.productData = data;
            });
        vm.type = 'edit';
        vm.saveProduct = function() {
            vm.processing = true;

            vm.message = '';

            Product.update($routeParams.product_id,vm.productData)
                .success(function (data) {
                    vm.processing = false;
                    vm.productData = {};
                    vm.message = data.message;
                });
        };
    })

    .controller('admin_ProductEditController', function(Product) {

        var vm = this;
        vm.type = 'edit';

        vm.saveProduct = function() {
            vm.processing = true;
            vm.message = '';

            Product.create(vm.productData)
                .success(function(data) {
                    vm.processing = false;
                    vm.productData = {};
                    vm.message = data.message;
                });
        };
    });



