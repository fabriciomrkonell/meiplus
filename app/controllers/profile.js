(function(){

	'use strict';

	angular.module('MEIPlus.controllers').controller('profileCtrl', profileCtrl);

	profileCtrl.$inject = ['$scope', '$http', '$rootScope'];

	function profileCtrl($scope, $http, $rootScope) {

		$scope.data = {};

		$http.post('/app/perfil').success(function(data){
			$scope.data = data.data;
		});

		$scope.saveRegister = function(profile){
			$http.post('/app/perfil/register', profile).success(function(data){
				$rootScope.messageSuccess = data.message;
			});
		};

		$scope.saveAddress = function(){

		};

		$scope.savePassword = function(){

		};

  }

}());