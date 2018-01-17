var app = angular.module('myApp', []);
app.controller('BasketCtrl', function ($scope) {
  $scope.description = "Single ticket";
  $scope.cost = 10;
  $scope.qty = 11;
});
