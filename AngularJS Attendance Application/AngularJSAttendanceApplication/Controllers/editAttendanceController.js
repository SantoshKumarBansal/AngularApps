var editAttendanceController = ["$scope", "$http", "$location", "$localStorage", "$routeParams", function ($scope, $http, $location, $localStorage, $routeParams) {
    $scope.attendance = {};
    $scope.TeacherID = $routeParams.TeacherID;
    $scope.StudentID = $routeParams.StudentID;
    $scope.AttendanceID = $routeParams.AttendanceID;

    if ($localStorage.teachersList[$routeParams.TeacherID].Students[$routeParams.StudentID].Attendance != undefined) {
        $scope.attendance = $localStorage.teachersList[$routeParams.TeacherID].Students[$routeParams.StudentID].Attendance[$scope.AttendanceID];
        $scope.attendance.Date = new Date($scope.attendance.Date);
    }

    $scope.editAttendance = function () {
        $localStorage.teachersList[$routeParams.TeacherID].Students[$routeParams.StudentID].Attendance[$scope.AttendanceID] = $scope.attendance;
        $location.path("/AttendanceManagement/" + $scope.TeacherID + "/" + $scope.StudentID);
    };
} ];
