var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider)
{

	$routeProvider
	.when('/about',
	{
		templateUrl: 'about.html'
	})
	.when('/education',
	{
		templateUrl: 'education.html'
	})
	.when('/workexperience',
	{
		templateUrl: 'workexperience.html'
	})
	.when('/projects',
	{
		templateUrl: 'projects.html'
	})
	.when('/contact',
	{
		templateUrl: 'contact.html'
	})
	.when('/animation',
	{
		templateUrl: 'animation.html'
	}).otherwise({
		redirectTo: '/about'
	});
}]);