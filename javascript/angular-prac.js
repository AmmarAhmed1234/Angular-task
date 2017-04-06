/**
 * Created by Ammar on 3/28/2017.
 */

var myApp = angular.module("myApp", []);

myApp.controller('mainController',['$scope','$filter','$http', function($scope,$filter,$http){

    $scope.lowercasehandle=function(event){

        if(event.which == 13){

      $scope.lower= $filter('lowercase')($scope.handle);
            //$scope.handle = '';
        }
    };

    $scope.rules=[
        {rulename : 'Must be a 5 Characters'},
        {rulename : 'Must be cool'},
        {rulename : 'Must not be used elsewhere'}

    ];

    $scope.characters = 5;

    $http.get('/api')
        .success(function(result){
            $scope.rules = result;
        })
        .error(function(data , status){
            console.log(data);
        });

}]);