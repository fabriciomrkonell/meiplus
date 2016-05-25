(function(){

	'use strict';

	angular.module('MEIPlus.controllers').controller('productCtrl', productCtrl);

	productCtrl.$inject = ['$scope', '$http', '$rootScope'];

	function productCtrl($scope, $http, $rootScope) {

		$scope.participants = [];
		$scope.products = [];
		$scope.data = {};
		$scope.modal = {
			search: ''
		};

		$http.get('/app/participant/select').success(function(data){
			$scope.participants = data.data;
		});

		$http.get('/app/product').success(function(data){
			$scope.products = data.data;
		});

		$scope.saveProduct = function(product){
			$rootScope.clearError();
			$http.post('/app/product', product).success(function(data){
				if(data.error === 1){
					$rootScope.errors = data.message;
				}else{
					$rootScope.setMessage(data.message);
					$scope.data = data.data;
					if(product._id === undefined){
						$scope.products.push(data.data);
					}
				}
			});
		};

		$scope.clear = function(){
			$scope.data = {};
			$rootScope.clearError();
		};

		$scope.searchProducts = function(){
			$('#modalProducts').modal();
		};

		$scope.editProduct = function(product){
			$rootScope.clearError();
			$scope.data = product;
			$('#modalProducts').modal('hide');
		};

  }

}());