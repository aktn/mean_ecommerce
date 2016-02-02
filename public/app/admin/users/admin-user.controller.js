angular.module('adminCtrl',['adminUserService'])

    .controller('admin_UserController', function(User){
        var vm = this;
        vm.processing = true;

        User.all()
            .success(function(data){
                vm.processing = false;
                vm.users = data;
            });

    });


