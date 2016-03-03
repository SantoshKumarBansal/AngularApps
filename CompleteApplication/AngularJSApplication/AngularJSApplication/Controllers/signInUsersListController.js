var signInUsersListController = ["$rootScope", "$scope", "$http", "$location", "$localStorage", "$sessionStorage", "masterFactory", "dataFactory", "loginFactory", function ($rootScope, $scope, $http, $location, $localStorage, $sessionStorage, masterFactory, dataFactory, loginFactory) {
//    if (loginFactory.loginInformation == undefined) {
//        $location.path("/Login");
//    }

    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    $scope.signInUsersList = {};

    $http.get("../AngularJSApplication/getSignInUsersList")
        .success(function (response) {
            $scope.signInUsersList = response;
        });

    $scope.editSignInInformation = function ($event) {
        //dataFactory.objectID = $event.target.attributes.id.value;
        $sessionStorage.objectID = $event.target.attributes.id.value;
        $location.path("/EditSignIn");
    };

    $scope.deleteSignInInformation = function ($event) {
        $http.post("../AngularJSApplication/deleteSignInInformation", { id: $event.target.attributes.id.value })
        .success(function (response) {
            $http.get("../AngularJSApplication/getSignInUsersList")
                .success(function (response) {
                    $scope.signInUsersList = response;
                });
            alert("Sign In Information Deleted Successfully.");
        });
    };

    $scope.orderByMe = function (columnName) {
        $scope.myOrderBy = columnName;
        $scope.sortType = !$scope.sortType;
    };
} ];
