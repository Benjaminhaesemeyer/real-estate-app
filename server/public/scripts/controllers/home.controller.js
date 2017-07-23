console.log('home.controller sourced!');
myApp.controller('HomeController', ['$http', function($http){
  var hc = this;
  getHome();

  hc.getHome = function(){
    console.log('getHome func ran');
    $http.get('/home').then(function(response){
      console.log(response.data);
      hc.array = response.data;
    });
  };
}]);
