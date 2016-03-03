var allOrdersListController = ["$rootScope", "$scope", "$http", "$location", "$localStorage", "$sessionStorage", "masterFactory", "dataFactory", "loginFactory", function ($rootScope, $scope, $http, $location, $localStorage, $sessionStorage, masterFactory, dataFactory, loginFactory) {
    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    $scope.signInUsersList = {};

    $http.get("../AngularJSApplication/getSignInUsersList")
        .success(function (response) {
            $scope.signInUsersList = response;
            console.log(JSON.stringify(response))
        });
} ];
