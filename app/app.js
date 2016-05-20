'use strict'

angular.module('MEIPlus.controllers', []);

angular.module('MEIPlus.services', []);

angular.module('MEIPlus.config', []);

angular.module('MEIPlus', ['MEIPlus.controllers', 'MEIPlus.services', 'MEIPlus.config']);

angular.element(document).ready(function() {
	angular.bootstrap(document, ['MEIPlus']);
});