var orderHistoryController = ["$rootScope", "$scope", "$http", "$location", "$localStorage", "$sessionStorage", "$filter", "masterFactory", "dataFactory", "loginFactory", function ($rootScope, $scope, $http, $location, $localStorage, $sessionStorage, $filter, masterFactory, dataFactory, loginFactory) {
    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    $scope.ordersList = [];

    $http.post("../AngularJSApplication/getSignInInformation", { id: $sessionStorage.loginInformation._id.$oid })
        .success(function (response) {
            $scope.ordersList = response[0].Orders;
        });
} ];