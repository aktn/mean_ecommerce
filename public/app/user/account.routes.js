angular.module('user.routes', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {

        $routeProvider

            .when('/login', {
                templateUrl : 'app/user/login/views/user-login.html',
                controller  : 'userLogInController',
                controllerAs: 'user'
            })

            .when('/users/:user_id', {
                templateUrl : 'app/user/profile/views/user-details.html',
                controller  : 'userDetailsController',
                controllerAs: 'user'
            })

          

           ;

        $locationProvider.html5Mode(true);

    });
