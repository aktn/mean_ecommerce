angular.module('userSignUpService', [])

    .factory('User', function($http){

        var userCreateFactory = {};

        userCreateFactory.create = function(signUpData) {
            return $http.post('/api/users/', signUpData);
        };


        return userCreateFactory;
    });


