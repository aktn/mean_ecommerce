angular.module('productService', [])

    .factory('Product', function($http){

        var productFactory = {};

        productFactory.all = function(){
            return $http.get('/api/products/');
        };


        productFactory.get = function(id) {
            return $http.get('/api/products/'+id);
        };


        return productFactory;
    });