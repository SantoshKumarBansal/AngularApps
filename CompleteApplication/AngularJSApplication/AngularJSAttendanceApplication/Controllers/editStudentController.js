var editStudentController = ["$scope", "$http", "$location", "$localStorage", "$routeParams", function ($scope, $http, $location, $localStorage, $routeParams) {
    $scope.student = {};
    $scope.TeacherID = $routeParams.TeacherID;
    $scope.StudentID = $routeParams.StudentID;

    if ($localStorage.teachersList[$scope.TeacherID].Students != undefined) {
        $scope.student = $localStorage.teachersList[$scope.TeacherID].Students[$routeParams.StudentID];
    }

    $scope.editStudent = function () {
        $localStorage.teachersList[$scope.TeacherID].Students[$routeParams.StudentID] = $scope.student;
        $location.path("/StudentManagement/" + $scope.TeacherID);
    };
} ];
