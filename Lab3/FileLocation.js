myApp.controller("myCtrl", function ($scope, $location)
{
  $scope.myUrl = $location.absUrl();
});