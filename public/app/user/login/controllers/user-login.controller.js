angular.module('userLogInCtrl', ['userAuthService'])

    .controller('userLogInController', function($rootScope, $location, userAuth) {

        var client = this;
        client.loggedIn = userAuth.isLoggedIn();

        $rootScope.$on('$routeChangeStart', function() {
            client.loggedIn = userAuth.isLoggedIn();

            userAuth.getUser()
                .then(function(data) {
                    client.user = data.data;
                });
        });

        client.doLogin = function() {
            client.processing = true;
            client.error = '';

            userAuth.login(client.loginData.email, client.loginData.password)
                .success(function(data) {
                    client.processing = false;

                    if (data.success)
                        $location.path('/products');
                    else
                        client.error = data.message;

                });
        };

        client.doLogout = function() {
            userAuth.logout();
            client.user = '';

            $location.path('/login');
        };

        client.createSample = function() {
            userAuth.createSampleUser();
        };

    });
