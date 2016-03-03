var studentManagementController = ["$scope", "$http", "$location", "$localStorage", "$routeParams", function ($scope, $http, $location, $localStorage, $routeParams) {
    $scope.studentsList = [];
    $scope.TeacherID = $routeParams.TeacherID;

    if ($localStorage.teachersList[$routeParams.TeacherID].Students != undefined) {
        $scope.studentsList = $localStorage.teachersList[$scope.TeacherID].Students;
    }

    $scope.editStudent = function ($event) {
        $location.path("/EditStudent/" + $scope.TeacherID + "/" + $event.target.attributes.id.value);
    };

    $scope.deleteStudent = function ($event) {
        $localStorage.teachersList[$scope.TeacherID].Students.splice($event.target.attributes.id.value, 1);
        alert("Student Deleted Successfully.");
    };

    $scope.manageAttendance = function ($event) {
        $location.path("/AttendanceManagement/" + $scope.TeacherID + "/" + $event.target.attributes.id.value);
    };
} ];
