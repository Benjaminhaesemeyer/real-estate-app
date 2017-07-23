console.log('sale.controller sourced!');
myApp.controller('SaleController', ['$http', function($http){
  var sc = this;
  getListings();

  function getListings() {
    console.log('getListings func ran');
    $http.get('/sale').then(function(response){
      console.log(response.data);
      sc.listing = response.data;
    });
  }
}]);
