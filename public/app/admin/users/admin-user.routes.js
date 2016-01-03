angular.module('adminUser.routes', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {

        $routeProvider

            .when('/admin/users', {
                templateUrl: 'app/admin/users/templates/admin.user-list.html',
                controller: 'admin_UserController',
                controllerAs: 'adminUser'
            });

        $locationProvider.html5Mode(true);

    });
