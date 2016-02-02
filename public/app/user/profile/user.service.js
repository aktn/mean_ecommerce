angular.module('userProService', [])

    .factory('User', function($http) {

        var userFactory = {};

        userFactory.get = function(id){
            return $http.get('/api/users/'+id);
        };

        return userFactory;

    });