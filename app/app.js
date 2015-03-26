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
}])
.factory('Data', function(){
	return {
		message: "init message from factory"
	};
})
.factory('Data2', function(){

	return {
		message2: "init messages2 from factory2"
	};

}) ;



function AppController($scope, Data) {
	$scope.data = Data;
	$scope.reversedMessage = function reversedMessage(str) {
		return str.split('').reverse().join('');
	};
}

function SecondAppController($scope, Data) {
	$scope.data = Data;
}