console.log('home.controller sourced!');
myApp.controller('HomeController', ['$http', function($http){
  var hc = this;

  function getHome(){
    console.log('getGome func ran');
    $http.get('/home').then(function(response){
      console.log(response.data);
      hc.homepage = response.data;
    });
  }
}]);
