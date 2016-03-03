var teacherManagementController = ["$scope", "$http", "$location", "$localStorage", function ($scope, $http, $location, $localStorage) {
    $scope.teachersList = [];

    if ($localStorage.teachersList != undefined) {
        $scope.teachersList = $localStorage.teachersList;
    }

    $scope.editTeacher = function ($event) {
        $location.path("/EditTeacher/" + $event.target.attributes.id.value);
    };

    $scope.deleteTeacher = function ($event) {
        $localStorage.teachersList.splice($event.target.attributes.id.value, 1);
        alert("Teacher Deleted Successfully.");
    };

    $scope.manageStudents = function ($event) {
        $location.path("/StudentManagement/" + $event.target.attributes.id.value);
    };
} ];
