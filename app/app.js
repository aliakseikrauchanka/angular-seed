'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]).
factory('Data', [function(){
	return {
		message: 'data from the root app servioce'
	};
}])

function AppController($scope, Data) {
	$scope.data = Data;
}

function SecondAppController($scope, Data) {
	$scope.data = Data;
}
