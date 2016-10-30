angular.module('DbApp').service('mainService', function($http){

  this.getOneProduct = function(id) {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/product/:id'
    });
  };

  this.getAllProducts = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/products'
    });
  };

  this.createNewProduct = function(newProduct) {
    return $http({
      method:'POST',
      url:'http://localhost:3000/product',
      data:newProduct
    }).then(function(response){
      return response.data;
    });
  };
  
  this.updateProduct = function() {
    return $http({
      method: 'PUT',
      url: 'http://localhost:3000/product/:id'
    });
  };

  this.deleteProduct = function() {
    return $http({
      method: 'DELETE',
      url: 'http://localhost:3000/product/:id'
    });
  };
});
