var loginController = ["$rootScope", "$scope", "$http", "$location", "$localStorage", "$sessionStorage", "masterFactory", "dataFactory", "loginFactory", function ($rootScope, $scope, $http, $location, $localStorage, $sessionStorage, masterFactory, dataFactory, loginFactory) {
//    if (loginFactory.loginInformation != undefined) {
//        $location.path("/Home");
    //    }

    if ($sessionStorage.loginInformation != undefined) {
        $location.path("/Home");
    }

    $scope.login = {};

    $scope.validateLogin = function () {
        $http.post("../AngularJSApplication/validateLogin", { login: JSON.stringify($scope.login) })
        .success(function (response) {
            if (response == "Error") {
                alert("Invalid E-Mail ID or Password.");
            }
            else {
                //loginFactory.loginInformation = response;
                $sessionStorage.loginInformation = response;
                $sessionStorage.orderHistory = $sessionStorage.loginInformation.Orders;
                $location.path("/Home");
            }
        });
    };
} ];
