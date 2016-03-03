var uploadAttendanceDataController = ["$scope", "$http", "$location", "$localStorage", function ($scope, $http, $location, $localStorage) {
    $scope.teachersList = [];

    if ($localStorage.teachersList != undefined) {
        $scope.teachersList = $localStorage.teachersList;
    }

    $scope.uploadAttendanceData = function () {
        $http.post("../AngularJSAttendanceApplication/uploadAttendanceData", { teachersList: angular.toJson($localStorage.teachersList) })
        .then(function (response) {
            if (response.data == 'Success') {
                delete $localStorage.teachersList;
                alert("Attendance Data Uploaded Successfully.");
                $location.path("/Home/");
            }
            else if (response.data == 'Error') {
                alert("There is some error in Attendance Data Uploading. Please try after some time.");
            }
            else if (response.data == 'NoInternetConnection') {
                alert("There is no Internet Connection on your device. Please connect your device to Internet, then upload attendance data.");
            }
            else {
                alert("There is some error in Attendance Data Uploading. Please try after some time.");
            }
        });
    };
} ];
