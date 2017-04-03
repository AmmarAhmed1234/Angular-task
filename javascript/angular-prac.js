/**
 * Created by Ammar on 3/28/2017.
 */
var myApp = angular.module("myApp", []);

myApp.controller('mainController',['$scope','$filter', function($scope,$filter){

    $scope.lowercasehandle=function(event){

        if(event.which == 13){

      $scope.lower= $filter('lowercase')($scope.handle);
            //$scope.handle = '';
        }
    };

    $scope.characters = 5;

}]);