angular.module('adminUserService', [])

    .factory('User', function($http){

        var adminUserFactory = {};

        adminUserFactory.all = function(){
            return $http.get('/api/users.html/');
        };


        return adminUserFactory;
    });