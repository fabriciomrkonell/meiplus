(function(){

	'use strict';

	angular.module('MEIPlus.controllers').controller('participantCtrl', participantCtrl);

	participantCtrl.$inject = ['$scope', '$http', '$rootScope'];

	function participantCtrl($scope, $http, $rootScope) {

		$scope.participants = [];
		$scope.data = {};
		$scope.modal = {
			search: ''
		};

		$http.get('/app/participant').success(function(data){
			$scope.participants = data.data;
		});

		$scope.saveParticipant = function(participant){
			$rootScope.clearError();
			$http.post('/app/participant', participant).success(function(data){
				if(data.error === 1){
					$rootScope.errors = data.message;
				}else{
					$rootScope.setMessage(data.message);
					$scope.data = data.data;
					if(participant._id === undefined){
						$scope.participants.push(data.data);
					}
				}
			});
		};

		$scope.clear = function(){
			$scope.data = {};
			$rootScope.clearError();
		};

		$scope.searchParticipants = function(){
			$('#modalParticipants').modal();
		};

		$scope.editParticipant = function(participant){
			$rootScope.clearError();
			$scope.data = participant;
			$('#modalParticipants').modal('hide');
		};

  }

}());