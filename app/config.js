(function(){

	'use strict';

	angular.module('Sensul.config').config(['$interpolateProvider', function($interpolateProvider) {

 		$interpolateProvider.startSymbol('[[');
  	$interpolateProvider.endSymbol(']]');

	}]);

}());