(function(){

	'use strict';

	angular.module('MEIPlus.controllers').controller('propertyCtrl', propertyCtrl);

	propertyCtrl.$inject = ['$scope', '$http', '$rootScope'];

	function propertyCtrl($scope, $http, $rootScope) {

		$scope.participants = [];
		$scope.properties = [];
		$scope.accountingAccounts = [];
		$scope.data = {};
		$scope.modal = {
			search: ''
		};

		$http.get('/app/participant/select').success(function(data){
			$scope.participants = data.data;
		});

		$http.get('/app/property').success(function(data){
			$scope.properties = data.data;
		});

		$http.get('/app/accounting-account/select').success(function(data){
			$scope.accountingAccounts = data.data;
		});

		$scope.saveProperty = function(property){
			$rootScope.clearError();
			$http.post('/app/property', property).success(function(data){
				if(data.error === 1){
					$rootScope.errors = data.message;
				}else{
					$rootScope.setMessage(data.message);
					$scope.data = data.data;
					if(property._id === undefined){
						$scope.properties.push(data.data);
					}
				}
			});
		};

		$scope.clear = function(){
			$scope.data = {};
			$rootScope.clearError();
		};

		$scope.searchProperties = function(){
			$('#modalProperties').modal();
		};

		$scope.editProperty = function(property){
			$rootScope.clearError();
			$scope.data = property;
			$('#modalProperties').modal('hide');
		};

  }

}());