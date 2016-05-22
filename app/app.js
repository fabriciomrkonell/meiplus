'use strict'

angular.module('MEIPlus.controllers', ['ngMask']);

angular.module('MEIPlus.services', []);

angular.module('MEIPlus.config', []);

angular.module('MEIPlus', ['MEIPlus.controllers', 'MEIPlus.services', 'MEIPlus.config']);

angular.module('MEIPlus').run(['$rootScope', '$timeout', function($rootScope, $timeout){

	$rootScope.message = undefined;

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