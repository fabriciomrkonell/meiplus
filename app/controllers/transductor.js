(function(){

	'use strict';

	angular.module('Sensul.controllers').controller('transductorCtrl', transductorCtrl);

	transductorCtrl.$inject = ['$scope', '$http'];

	function openModal(){
		$('#modal').modal('show');
	};

	function transductorCtrl($scope, $http) {

		angular.extend($scope, {
			transductors: []
		});

		$http.get('/transductor/all').success(function(data){
			data = data.stations[0].transductors;
			angular.extend($scope, {
				transductors: data
			});
		});

		$scope.newTransductor = function(){
			openModal();
		};

		$scope.closeModal = function(){
			$('#modal').modal('hide');
		};

  }

}());