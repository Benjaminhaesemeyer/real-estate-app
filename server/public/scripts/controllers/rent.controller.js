console.log('rent.controller sourced!');
myApp.controller('RentController', ['$http', function($http){
  var rc = this;
  getRentals();

  function getRentals() {
    console.log('getRentals func ran');
    $http.get('/rent').then(function(response){
      console.log(response.data);
      rc.listing = response.data;
    });
  }
}]);
