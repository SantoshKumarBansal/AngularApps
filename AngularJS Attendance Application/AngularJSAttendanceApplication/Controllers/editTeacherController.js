var editTeacherController = ["$scope", "$http", "$location", "$localStorage", "$routeParams", function ($scope, $http, $location, $localStorage, $routeParams) {
    $scope.teacher = {};

    if ($localStorage.teachersList != undefined) {
        $scope.teacher = $localStorage.teachersList[$routeParams.TeacherID];
    }

    $scope.editTeacher = function () {
        $localStorage.teachersList[$routeParams.TeacherID] = $scope.teacher;
        $location.path("/TeacherManagement");
    };
} ];
