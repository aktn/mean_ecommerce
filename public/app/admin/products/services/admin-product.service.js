angular.module('adminProductService', [])

    .factory('Product', function($http){

        var adminProductFactory = {};

        adminProductFactory.all = function(){
            return $http.get('/api/products/');
        };


        adminProductFactory.get = function(id) {
            return $http.get('/api/products/'+id);
        };

        adminProductFactory.update = function(id, productData) {
            return $http.put('/api/products/'+id,productData);
        };


        return adminProductFactory;
    });