(function(){

	'use strict';

	angular.module('Sensul.controllers').controller('realtimeCtrl', realtimeCtrl);

	realtimeCtrl.$inject = ['$scope'];

	function realtimeCtrl($scope) {

		$('#tree').treeview({
			data: [{
		    text: "Node 1",
			  state: {
			    expanded: false,
			  },
  			nodes: [
		      {
		        text: "Child 1",
		        nodes: [
		          {
		            text: "Grandchild 1"
		          },
		          {
		            text: "Grandchild 2"
		          }
		        ]
		      },
		      {
		        text: "Child 2"
		      }
		    ]
		  }]
		});

  }

}());