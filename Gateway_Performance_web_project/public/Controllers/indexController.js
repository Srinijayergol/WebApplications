var app = angular.module('myGatewayApp',['ngRoute']);
app.controller('myGatewayController',function ($scope, $http,$timeout) {
    $scope.dataValues = new Array;
    $scope.dataCurrentBuildValues = new Array;
    $scope.loadValues = function(){
       $http.get('/Controllers/json_Data.json').then(function(jsonData) {
            $scope.dataValues = jsonData;
            $scope.list = $scope.dataValues;
            console.log($scope.list.data);
            }).catch(function (Object) {
                 alert(Object.data);
            });

    $timeout(function(){
      $scope.loadValues();
    },300000)
  };
  $scope.loadCurrentBuildValues = function(){
     $http.get('/Controllers/jsonData_currentBuild.json').then(function(jsonData) {
       $scope.dataCurrentBuildValues = jsonData;
       $scope.list_currentBuild = $scope.dataCurrentBuildValues;
       console.log($scope.list_currentBuild.data);      
       }).catch(function (Object) {
            alert(Object.data);
  });
  $scope.parJson = function (json) {
    console.log(JSON.parse(json));
    return JSON.parse(json);
  }
  $timeout(function(){
    $scope.loadCurrentBuildValues();
  },300000)
};
    $scope.loadValues();
    $scope.loadCurrentBuildValues();
});
