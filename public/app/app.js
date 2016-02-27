angular.module('MEAN_Ecommerce',[
    'ngAnimate',
    'app.routes',
    'productCtrl',
    'productService',
    'adminProductCtrl',
    'adminProductService',
   
    'userLogInCtrl',
    'adminUserService',
    'user.routes',
    'userCtrl',
    'adminCtrl',
    'adminAuthService',
    'admin.routes',
    'userAuthService',
    'userLogInCtrl',
    'userProService',
    'userSignUpService',
    'ngCart',
    'users'

])

.config(function($httpProvider) {

    // attach our auth interceptor to the http requests
    $httpProvider.interceptors.push('AuthInterceptor');

});

