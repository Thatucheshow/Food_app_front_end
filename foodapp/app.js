(function () {

'use strict'; 

const app = angular.module('MyFoodApp', []);

app.controller('MyFirstcontroller', function($scope, $http) {
    // $scope.allData = "allData"
    $scope.baseUrl = "https://ancient-beach-68054.herokuapp.com/api/foods"
    $http({
        method: "GET",
        url: $scope.baseUrl
    }).then(response => {
        $scope.allData = response.data;
        console.log($scope.allData)
    }, error => {
        console.error(error);
    }).catch(err => console.error('Catch: ' , err));
    

});

})();

// $http){
//     $http.get("https://ancient-beach-68054.herokuapp.com/api/foods").then(response => {
//      $scope.allData = response.data
//          console.log($scope.allData)
//      })