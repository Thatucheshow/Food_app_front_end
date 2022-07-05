(function () {

'use strict'; 

const app = angular.module('MyFoodApp', []);

app.controller('MyFirstcontroller', function($scope, $http) {
    $scope.allData = "";
    $scope.baseUrl = "https://ancient-beach-68054.herokuapp.com/api/foods";
        $http({
            method: "GET",
            url: $scope.baseUrl
        }).then(response => {
            $scope.allData = response.data;
            console.log($scope.allData)
        }, error => {
        console.error(error);
        }).catch(err => console.error('Catch: ' , err));
        $scope.postData = "";
        $scope.postUrl = "https://ancient-beach-68054.herokuapp.com/api/foods"
             $http({
                 method: "POST",
                 url: $scope.postUrl
             }).then(response => {
                 $scope.postData = response.data;
             })

});

app.controller('MyPostcontroller', function($scope, $http) {
        $scope.title = null;
        $scope.description = null;
        $scope.image = null;
        $scope.price = null;
        $scope.date = null;
        $scope.postData = function (title, description, image, price, date) {
            let data = {
                title: title,
                description: description,
                image: image,
                price: price,
                
            };
        $http.post('')    
        }

        

});

})();

// $http){
//     $http.get("https://ancient-beach-68054.herokuapp.com/api/foods").then(response => {
//      $scope.allData = response.data
//          console.log($scope.allData)
//      })