var reportByStateController = ["$rootScope", "$scope", "$http", "$location", "$localStorage", "$sessionStorage", "$filter", "masterFactory", "dataFactory", "loginFactory", function ($rootScope, $scope, $http, $location, $localStorage, $sessionStorage, $filter, masterFactory, dataFactory, loginFactory) {
    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    $scope.reportByState = [];

    masterFactory.getStateList().then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            $scope.getSignInUsersCountByState(response.data[i].StateName, i);
        }
    });

    $scope.getSignInUsersCountByState = function (stateName, i) {
        $http.post("../AngularJSApplication/getSignInUsersListByState", { stateName: stateName })
        .then(function (response) {
            var temp = {};
            temp.StateName = stateName;
            temp.Count = response.data.length;
            $scope.reportByState[i] = temp;
        });
    };
} ];
