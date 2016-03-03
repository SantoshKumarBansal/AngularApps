var addTeacherController = ["$scope", "$http", "$location", "$localStorage", function ($scope, $http, $location, $localStorage) {
    $scope.teacher = {};

    if ($localStorage.teachersList == undefined) {
        $localStorage.teachersList = [];
    }

    $scope.addTeacher = function () {
        $localStorage.teachersList.push($scope.teacher);
        $location.path("/TeacherManagement");
    };
} ];
