/**
 * Created by Ammar on 4/8/2017.
 */

var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput});
        $scope.todoInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});