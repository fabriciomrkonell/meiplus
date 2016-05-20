(function(){

	'use strict';

	angular.module('MEIPlus.config').config(['$interpolateProvider', function($interpolateProvider) {

 		$interpolateProvider.startSymbol('[[');
  	$interpolateProvider.endSymbol(']]');

	}]);

}());