angular.module('DbApp').controller('mainCtrl', function($scope, mainService) {

    $scope.getOneProduct = mainService.getOneProduct().then(function(response) {
        $scope.productId = response.data;
    });

    $scope.getAllProducts = mainService.getAllProducts().then(function(response) {
        $scope.products = response.data;
    });

    $scope.createNewProduct = function(newProduct) {
        mainService.createNewProduct(newProduct).then(function(response) {
            alert(response);
        });
    };

    $scope.updateProduct = mainService.updateProduct().then(function(response) {});

    $scope.deleteProduct = mainService.deleteProduct().then(function(response) {});
});
