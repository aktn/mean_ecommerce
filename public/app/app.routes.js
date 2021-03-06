angular.module('app.routes', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {

        $routeProvider

            .when('/products', {
                templateUrl: 'app/products/views/product-list.html',
                controller: 'productController',
                controllerAs: 'product'
            })


            .when('/products/:product_id', {
                templateUrl: 'app/products/views/product-details.html',
                controller: 'productDetailsController',
                controllerAs: 'product'
            })

            .when('/checkout', {
                templateUrl : 'app/products/views/product-checkout.html',
                controller  : 'ProductCheckoutCtrl',
                controllerAs: 'items'
            });

        $locationProvider.html5Mode(true);

    });
