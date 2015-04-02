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
.directive('supermanattribute', function () {
	return {
		restrict: 'A',
		link: function () {
			console.log('attribute');
		}
	};
})
.directive('supermanClass', function () {
	return {
		restrict: 'C',
		link: function () {
			alert('class');
		}
	};
});

function AppController($scope, Data) {
	$scope.data = Data;
}
