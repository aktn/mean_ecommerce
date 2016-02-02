angular.module('users', ['userSignUpService'])

.controller('userCreateController', function(User) {
    
    var newUser = this;
    newUser.type = 'create';

    newUser.saveUser = function() {
        newUser.processing = true;
        newUser.error = '';
   
        User.create(newUser.signUpData)
            .success(function(data) {
                newUser.processing = false;
                newUser.signUpData = {};
                

        });            
    };  

})

