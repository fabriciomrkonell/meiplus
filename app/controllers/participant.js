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
			$http.post('/app/participant', participant).success(function(data){
				$rootScope.setMessage(data.message);
				$scope.data = data.data;
				if(participant._id === undefined){
					$scope.participants.push(data.data);
				}
			});
		};

		$scope.clear = function(){
			$scope.data = {};
		};

		$scope.searchParticipants = function(){
			$('#modalParticipants').modal();
		};

		$scope.editParticipant = function(participant){
			$scope.data = participant;
			$('#modalParticipants').modal('hide');
		};

  }

}());