var app_build = angular.module('buildApp',[]);
app_build.controller('buildCtrl',function($scope){
  console.log("hello world");
  $scope.names = ["C4.Large", "C4.XLarge"];
  $scope.myBuildFunc = function(){
    console.log("You clicked build button");
  };
});
