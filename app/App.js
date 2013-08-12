'use strict';

/* APP */
/*
 * @module  myApp
 * @author  Esteban López A
 * @param   applicationName, empty array
 * @created 08/09/2013
*/


//Module declaration
var app = angular.module('myApp', []);


//Router Application
app.config(function ($routeProvider) {

	$routeProvider.when('/example-view1', {templateUrl: 'app/views/example-view1.html', controller: 'Examp1Controller'});
	$routeProvider.when('/example-view2', {templateUrl: 'app/views/example-view2.html', controller: 'Examp1Controller'});
	$routeProvider.otherwise({redirectTo: '/example-view1'}); //Default view
});
