var cartController = ["$rootScope", "$scope", "$http", "$location", "$localStorage", "$sessionStorage", "$filter", "masterFactory", "dataFactory", "loginFactory", function ($rootScope, $scope, $http, $location, $localStorage, $sessionStorage, $filter, masterFactory, dataFactory, loginFactory) {
    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    $scope.cart = [];
    if ($sessionStorage.cart != undefined) {
        $scope.cart = $sessionStorage.cart;
    }

    $scope.editOrder = function ($event) {
        $location.path("/EditOrder/" + $event.target.attributes.id.value);
    };

    $scope.deleteOrder = function ($event) {
        $sessionStorage.cart.splice($event.target.attributes.id.value, 1);
        alert("Order Deleted Successfully.");
    };

    $scope.placeOrder = function () {
        $http.post("../AngularJSApplication/placeOrder", { id: $sessionStorage.loginInformation._id.$oid, orderItems: angular.toJson($sessionStorage.cart) })
        .then(function (response) {
            delete $sessionStorage.cart;
            alert("Your Order Placed Successfully.");
            $location.path("/OrderHistory");
        });
    };
} ];
