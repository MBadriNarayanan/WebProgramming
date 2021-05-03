myApp.controller("sample", function ($scope, $interval)
{
  $interval(function ()
  {
    $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);
});
