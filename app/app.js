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
.directive('superman', function () {
	return {
		restrict: 'E',
		template: '<div>Superma is here</div>'
	};
})
.directive('enter', function () {
	return function (scope, element, attr) {
		element.bind('mouseenter', function () {
			scope.$apply(attr.enter);
		});
	};
})
.directive('leave', function () {
	return function (scope, element, attr) {
		element.bind('mouseleave', function () {
			// element.removeClass(attr.enter);
		});
	};
})
.controller('AppController', function ($scope, Data) {
	$scope.data = Data;

	$scope.loadData = function () {
		alert('loadData');
	};
});
