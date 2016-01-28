angular.module('adminLogInCtrl', ['adminAuthService'])

    .controller('adminLogInController', function($rootScope, $location, adminAuth) {

        var am = this;
        am.loggedIn = adminAuth.isLoggedIn();

        $rootScope.$on('$routeChangeStart', function() {
            am.loggedIn = adminAuth.isLoggedIn();

            adminAuth.getUser()
                .then(function(data) {
                    am.user = data.data;
                });
        });

        am.adminLogin = function() {
            am.processing = true;

            am.error = '';

            adminAuth.login(am.data.username, am.data.password)
                .success(function(data) {
                    am.processing = false;

                    if (data.success)
                        $location.path('/admin/products');
                    else
                        am.error = data.message;

                });
        };

        am.doLogout = function() {
            adminAuth.logout();
            am.user = '';

            $location.path('/login');
        };


    });