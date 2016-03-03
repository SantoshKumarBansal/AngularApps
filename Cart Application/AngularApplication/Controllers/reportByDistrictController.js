var reportByDistrictController = ["$rootScope", "$scope", "$http", "$location", "$localStorage", "$sessionStorage", "$filter", "$routeParams", "masterFactory", "dataFactory", "loginFactory", function ($rootScope, $scope, $http, $location, $localStorage, $sessionStorage, $filter, $routeParams, masterFactory, dataFactory, loginFactory) {
    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    $scope.reportByDistrict = [];

    masterFactory.getDistrictList($routeParams.StateName).then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            $scope.getSignInUsersCountByDistrict(response.data[i].DistrictName, i);
        }
    });

    $scope.getSignInUsersCountByDistrict = function (districtName, i) {
        $http.post("../AngularJSApplication/getSignInUsersListByDistrict", { districtName: districtName })
        .then(function (response) {
            var temp = {};
            temp.DistrictName = districtName;
            temp.Count = response.data.length;
            $scope.reportByDistrict[i] = temp;
        });
    };
} ];
