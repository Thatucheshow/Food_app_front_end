// (function () {

// 'use strict'; 

const app = angular.module('MyFoodApp', []);

app.controller('MyFirstcontroller', function($scope, $http){
   $http.get("https://ancient-beach-68054.herokuapp.com/api/foods").then(response => {
    $scope.allData = response.data
        console.log($scope.allData)
    })
// console.log($scope.data)

});

// })();
