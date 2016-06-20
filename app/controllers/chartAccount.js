(function(){

	'use strict';

	angular.module('MEIPlus.controllers').controller('chartAccountCtrl', chartAccountCtrl);

	chartAccountCtrl.$inject = ['$scope', '$http', '$rootScope'];

	function chartAccountCtrl($scope, $http, $rootScope) {

		$scope.chartAccounts = [];
		$scope.accountingAccounts = [];
		$scope.data = {};
		$scope.modal = {
			search: ''
		};

		$http.get('/app/accounting-account/select').success(function(data){
			$scope.accountingAccounts = data.data;
		});

		$http.get('/app/chart-account').success(function(data){
			$scope.chartAccounts = data.data;
		});

		$scope.saveChartAccount = function(chartAccount){
			$rootScope.clearError();
			$http.post('/app/chart-account', chartAccount).success(function(data){
				if(data.error === 1){
					$rootScope.errors = data.message;
				}else{
					$rootScope.setMessage(data.message);
					$scope.data = data.data;
					if(chartAccount._id === undefined){
						$scope.chartAccounts.push(data.data);
					}
				}
			});
		};

		$scope.clear = function(){
			$scope.data = {};
			$rootScope.clearError();
		};

		$scope.searchChartAccounts = function(){
			$('#modalChartAccounts').modal();
		};

		$scope.editChartAccount = function(chartAccount){
			$rootScope.clearError();
			$scope.data = chartAccount;
			$('#modalChartAccounts').modal('hide');
		};

		$scope.getNamePlaneReference = function(id){
			var exitNamePlaneReference
			$scope.accountingAccounts.forEach(function(item){
				if(item.id == id){
					exitNamePlaneReference = item.name;
					return false;
				}
			});
			return exitNamePlaneReference;
		};

  }

}());