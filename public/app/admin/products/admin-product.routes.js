angular.module('adminProduct.routes', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {

        $routeProvider

            .when('/admin/products', {
                templateUrl: 'app/admin/products/templates/admin.product-list.html',
                controller: 'admin_ProductController',
                controllerAs: 'product'
            })


            .when('/admin/products/:product_id', {
                templateUrl: 'app/admin/products/templates/admin.product-details.html',
                controller: 'admin_ProductDetailsController',
                controllerAs: 'product'
            })

            .when('/admin/products/edit/:product_id', {
                templateUrl: 'app/admin/products/templates/admin.product-edit.html',
                controller: 'admin_ProductDetailsController',
                controllerAs: 'product'
            });

        $locationProvider.html5Mode(true);

    });
