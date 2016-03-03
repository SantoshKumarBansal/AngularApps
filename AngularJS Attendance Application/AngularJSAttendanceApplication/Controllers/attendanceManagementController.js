var attendanceManagementController = ["$scope", "$http", "$location", "$localStorage", "$routeParams", function ($scope, $http, $location, $localStorage, $routeParams) {
    $scope.attendanceList = [];
    $scope.TeacherID = $routeParams.TeacherID;
    $scope.StudentID = $routeParams.StudentID;

    if ($localStorage.teachersList[$routeParams.TeacherID].Students[$routeParams.StudentID].Attendance != undefined) {
        $scope.attendanceList = $localStorage.teachersList[$routeParams.TeacherID].Students[$routeParams.StudentID].Attendance;
    }

    $scope.editAttendance = function ($event) {
        $location.path("/EditAttendance/" + $scope.TeacherID + "/" + $scope.StudentID + "/" + $event.target.attributes.id.value);
    };

    $scope.deleteAttendance = function ($event) {
        $localStorage.teachersList[$routeParams.TeacherID].Students[$routeParams.StudentID].Attendance.splice($event.target.attributes.id.value, 1);
        alert("Attendance Deleted Successfully.");
    };
} ];
