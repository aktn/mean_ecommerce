angular.module('admin.routes', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {

        $routeProvider

            .when('/admin/logIn', {
                templateUrl: 'app/admin/logIn/views/logIn.html',
                controller: 'adminLogInController',
                controllerAs: 'admin'
            })

            .when('/admin/products', {
                templateUrl: 'app/admin/products/views/admin.product-list.html',
                controller: 'admin_ProductController',
                controllerAs: 'product'
            })

            .when('/admin/products/:product_id', {
                templateUrl: 'app/admin/products/views/admin.product-details.html',
                controller: 'admin_ProductDetailsController',
                controllerAs: 'product'
            })

            .when('/admin/products/edit/:product_id', {
                templateUrl: 'app/admin/products/views/admin.product-edit.html',
                controller: 'admin_ProductDetailsController',
                controllerAs: 'product'
            })

             .when('/admin/users', {
                templateUrl: 'app/admin/users/views/admin.user-list.html',
                controller: 'admin_UserController',
                controllerAs: 'adminUser'
            })

             .when('/admin/upload/products', {
                templateUrl: 'app/admin/products/views/admin.product-upload.html',
                controller: 'admin_ProductUploadController',
                controllerAs: 'product'
             });

        $locationProvider.html5Mode(true);

    });
