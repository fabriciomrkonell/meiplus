'use strict'

angular.module('MEIPlus.controllers', ['ngMask', 'angularUtils.directives.dirPagination']);

angular.module('MEIPlus.services', []);

angular.module('MEIPlus.config', []);

angular.module('MEIPlus', ['MEIPlus.controllers', 'MEIPlus.services', 'MEIPlus.config']);

angular.module('MEIPlus').run(['$rootScope', '$timeout', function($rootScope, $timeout){

	$rootScope.message = undefined;
	$rootScope.errors = {};

	$rootScope.getError = function(err){
		return $rootScope.errors[err];
	};

	$rootScope.clearError = function(){
		$rootScope.errors = {};
	};

	$rootScope.setMessage = function(message){
		$rootScope.message = message;
		$timeout(function(){
			$rootScope.message = undefined;
		}, 700);
	};

}]);

angular.element(document).ready(function() {
	angular.bootstrap(document, ['MEIPlus']);
});