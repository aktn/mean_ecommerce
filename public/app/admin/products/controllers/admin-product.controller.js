angular.module('adminProductCtrl',['adminProductService'])

    .controller('admin_ProductController', function(Product){
        var vm = this;
        vm.processing = true;

        //To retrieve all the product lists
        Product.all()
            .success(function(data){
                vm.processing = false;
                vm.products = data;
            });

        vm.deleteProduct = function(id){
            vm.processing = true;

            Product.delete(id)
                .success(function(data){
                    Product.all()
                        .success(function(data){
                            vm.processing = false;
                            vm.products = data;
                            
                        });
                });
        };

    })

    .controller('admin_ProductUploadController', function(Product){
        var upload = this;
        upload.type = 'create';

        upload.saveProduct = function(){
            upload.processing = true;
            upload.message = '';

            Product.create(upload.productData)
                .success(function(data){
                    upload.processing = false;
                    upload.productData = {};
                    upload.message = data.message;
                });
            };
    })



    .controller('admin_ProductDetailsController', function($routeParams, Product) {

        var vm = this;

        //To get the particular product
        Product.get($routeParams.product_id)
            .success(function(data) {
                vm.productData = data;
            });

        //To edit the product
        vm.type = 'edit';
        vm.editProduct = function() {
            vm.processing = true;

            vm.message = '';

            Product.update($routeParams.product_id,vm.productData)
                .success(function (data) {
                    vm.processing = false;
                    vm.productData = {};
                    vm.message = data.message;
                });
        };
    });



