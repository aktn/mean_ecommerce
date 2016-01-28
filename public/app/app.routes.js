angular.module('app.routes', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {

        $routeProvider

            // show all users.html
            .when('/products', {
                templateUrl: 'app/products/views/product-list.html',
                controller: 'productController',
                controllerAs: 'product'
            })


            .when('/products/:product_id', {
                templateUrl: 'app/products/views/product-details.html',
                controller: 'productDetailsController',
                controllerAs: 'product'
            });

        $locationProvider.html5Mode(true);

    });
