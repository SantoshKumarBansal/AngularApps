var app = angular.module("toDoApplication", ["ngMessages", "ngStorage"]);

app.controller("toDoController", ["$scope", "$http", "$sessionStorage", function ($scope, $http, $sessionStorage) {
    $scope.task = {};
    $scope.taskList = [];

    if ($sessionStorage.tasks == undefined) {
        $sessionStorage.tasks = [];
    }
    else {
        $scope.taskList = angular.fromJson($sessionStorage.tasks);
    }

    $scope.assignTask = function () {
        $scope.task.Status = "Incomplete";
        var taskcopy = $scope.task;
        $sessionStorage.tasks.push(taskcopy);
        //$scope.task = {};
        alert('Task Assigned Successfully.');
    };

    $scope.editAssignedTask = function ($event) {
        $location.path("/EditOrder/" + $event.target.attributes.id.value);
    };

    $scope.deleteAssignedTask = function ($event) {
        $sessionStorage.tasks.splice($event.target.attributes.id.value, 1);
        alert("Assigned Task Deleted Successfully.");
    };

    $scope.markAsCompleteAssignedTask = function ($event) {
        $sessionStorage.tasks[$event.target.attributes.id.value].Status = "Complete";
        alert("Assigned Task Marked as Completed Successfully.");
    };
} ]);