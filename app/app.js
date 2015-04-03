'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/view1'});
}])
.factory('Data', function () {
	var Data = {};

	Data.tField = 'field';
	Data.menArray = [
		{
			name: 'Henrick',
			id: 1
		},
		{
			name: 'Erick',
			id: 2
		},
		{
			name: 'Patrick',
			id: 3
		},
	];

	return Data;
})
.directive('man', function () {
	return {
		scope: {
			head: '@'
		},
		transclude: true,
		template: '<div style="border: 1px solid black;margin:10px">really: {{head}} <div ng-transclude></div></div>',
		restrict: 'E',
		controller: function ($scope) {
			$scope.parts = [];

			this.addHead = function () {
				$scope.parts.push('head');
			};
			this.addArm = function () {
				$scope.parts.push('arm');
			};
			this.addFoot = function () {
				$scope.parts.push('foot');
			};

		},
		link: function (scope, element) {
			element.bind('mouseenter', function () {
				console.log(scope.parts);
			});
		}
	};
});

myApp.directive('arm', function () {
	return {
		require: 'man',
		link: function  (scope, element, attr, man) {
			man.addArm();
		}
	};
})
.directive('head', function () {
	return {
		require: 'man',
		link: function  (scope, element, attr, man) {
			man.addHead();
		}
	};
})
.directive('foot', function () {
	return {
		require: 'man',
		link: function  (scope, element, attr, man) {
			man.addFoot();
		}
	};
})

.directive('enter', function () {
	return {
		link: function  (scope, element, attr, man) {
			element.bind('mouseenter', function () {
				scope.$apply(attr.enter);
			});
		}
	};
})

.controller('AppController', function ($scope, Data) {
	$scope.data = Data;

	$scope.loadData = function () {
		console.log('loadData');
	};
});
