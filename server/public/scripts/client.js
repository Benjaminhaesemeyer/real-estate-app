console.log('client js sourced');
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider
  .when('/home', {
    controller: 'HomeController as hc',
    templateUrl: 'views/templates/home.html'
  })
  .when('/rent',{
    controller: 'RentController as rc',
    templateUrl: 'views/templates/rent.html'
  })
  .when('/sale', {
    controller: 'SaleController as sc',
    templateUrl: 'views/templates/sale.html'
  })
  .otherwise({
    redirectTo: 'home'
  });
});
