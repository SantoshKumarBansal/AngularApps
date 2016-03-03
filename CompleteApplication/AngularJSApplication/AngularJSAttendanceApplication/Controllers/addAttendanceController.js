var addAttendanceController = ["$scope", "$http", "$location", "$localStorage", "$routeParams", function ($scope, $http, $location, $localStorage, $routeParams) {
    $scope.attendance = {};
    $scope.TeacherID = $routeParams.TeacherID;
    $scope.StudentID = $routeParams.StudentID;

    if ($localStorage.teachersList[$routeParams.TeacherID].Students[$routeParams.StudentID].Attendance == undefined) {
        $localStorage.teachersList[$routeParams.TeacherID].Students[$routeParams.StudentID].Attendance = [];
    }

    $scope.addAttendance = function () {
        debugger;
        $localStorage.teachersList[$routeParams.TeacherID].Students[$routeParams.StudentID].Attendance.push($scope.attendance);
        $location.path("/AttendanceManagement/" + $scope.TeacherID + "/" + $scope.StudentID);
    };
} ];
