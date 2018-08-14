var app_databuild = angular.module('buildDataApp', []);
app_databuild.controller('buildDataCtrl', function($scope){
     console.log("Hello world from build data app");
     $scope.names = ["Select","Stress", "Longevity"];
     $scope.modules =["Select", "Windows_reach", "MAC_reach", "Mobile_gateway", "Core_gateway"];
     $scope.myBuildDataFunc = function(){
       console.log("You clicked build data button");
     };
});
