angular.module('userCtrl', ['userService'])

   

    .controller('userDetailsController', function($routeParams, User) {

        var vm = this;

        User.get($routeParams.user_id)
            .success(function(data) {
                vm.userData = data;
            });
    });