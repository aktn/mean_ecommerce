angular.module('authService', [])

    .factory('Auth', function($http, $q, AuthToken) {

        var authFactory = {};

        authFactory.login = function(email, password) {

            return $http.post('/api/authenticate', {
                username: email,
                password: password
            })
                .success(function(data) {
                    AuthToken.setToken(data.token);
                    return data;
                });
        };


        authFactory.isLoggedIn = function() {
            if (AuthToken.getToken())
                return true;
            else
                return false;
        };

        authFactory.logout = function() {
            AuthToken.setToken();
        };

        authFactory.getUser = function() {
            if (AuthToken.getToken())
                return $http.get('/api/me', { cache: true });
            else
                return $q.reject({ message: 'User has no token.' });
        };

        return authFactory;

    })
