(function(){

	'use strict';

	angular.module('MEIPlus.controllers').controller('profileCtrl', profileCtrl);

	profileCtrl.$inject = ['$scope', '$http', '$rootScope'];

	function profileCtrl($scope, $http, $rootScope) {

		$scope.data = {};

		$http.get('/app/perfil').success(function(data){
			$scope.data = data.data;
		});

		$scope.saveProfile = function(profile){
			$http.post('/app/perfil/profile', profile).success(function(data){
				$rootScope.setMessage(data.message);
			});
		};

		$scope.savePassword = function(profile){
			$http.post('/app/perfil/password', profile).success(function(data){
				$rootScope.setMessage(data.message);
				$scope.data.password = '';
			});
		};

  }

}());