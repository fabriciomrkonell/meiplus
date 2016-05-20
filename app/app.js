'use strict'

angular.module('Sensul.controllers', []);

angular.module('Sensul.services', []);

angular.module('Sensul.config', []);

angular.module('Sensul', ['Sensul.controllers', 'Sensul.services', 'Sensul.config']);

angular.element(document).ready(function() {
	angular.bootstrap(document, ['Sensul']);
});