angular.module('userCtrl', ['userSignUpService'])


    .controller('userDetailsController', function($routeParams, User) {

    var udc = this;

    User.get($routeParams.user_id)
        .success(function(data) {
            udc.userData = data;
        });

 });











