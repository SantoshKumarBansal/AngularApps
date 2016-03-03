var addStudentController = ["$scope", "$http", "$location", "$localStorage", "$routeParams", function ($scope, $http, $location, $localStorage, $routeParams) {
    $scope.student = {};
    $scope.TeacherID = $routeParams.TeacherID;

    if ($localStorage.teachersList[$scope.TeacherID].Students == undefined) {
        $localStorage.teachersList[$scope.TeacherID].Students = [];
    }

    $scope.addStudent = function () {
        $localStorage.teachersList[$routeParams.TeacherID].Students.push($scope.student);
        $location.path("/StudentManagement/" + $scope.TeacherID);
    };
} ];
