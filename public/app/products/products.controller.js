angular.module('productCtrl',['productService'])

    .controller('productController', function(Product){
        var pc = this;
        pc.processing = true;

        Product.all()
            .success(function(data){
                pc.processing = false;
                pc.products = data;
            });

    })

    .controller('productDetailsController', function($routeParams, Product) {

        var pdc = this;

        Product.get($routeParams.product_id)
            .success(function(data) {
                pdc.productData = data;
            });
    })

    .constant('clientTokenPath', '/api/payment/client_token')

    .controller('ProductCheckoutCtrl', function($scope, $http, ngCart){


        $scope.errors = '';

        $scope.paymentOptions = {
          onPaymentMethodReceived: function(payload) {
            angular.merge(payload, ngCart.toObject());

            payload.total = payload.totalCost;
            $http.post('/api/orders', payload).then(function success () {
              ngCart.empty(true);
              $state.go('products');
            }, 
            function error (res) {
              $scope.errors = res;
            });
          }
        };
    });


  ;





