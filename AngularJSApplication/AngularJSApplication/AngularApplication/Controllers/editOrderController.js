var editOrderController = ["$rootScope", "$scope", "$http", "$location", "$localStorage", "$sessionStorage", "$filter", "$routeParams", "masterFactory", "dataFactory", "loginFactory", function ($rootScope, $scope, $http, $location, $localStorage, $sessionStorage, $filter, $routeParams, masterFactory, dataFactory, loginFactory) {
    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
    }

    $scope.order = {};
    $scope.order.ItemPrice = '';
    $scope.order.Quantity = '';
    $scope.order.TotalAmount = '';
    $scope.itemList = [{ Item: "Mobile", Price: 10000 }, { Item: "Laptop", Price: 50000 }, { Item: "Computer", Price: 30000}];

    $scope.getItemPrice = function (item) {
        $scope.order.ItemPrice = '';
        $scope.order.Quantity = '';
        $scope.order.TotalAmount = '';
        for (var i = 0; i < $scope.itemList.length; i++) {
            if ($scope.itemList[i].Item == item) {
                $scope.order.ItemPrice = $scope.itemList[i].Price;
            }
        }
    };

    $scope.getTotalAmount = function (itemPrice, quantity) {
        $scope.order.TotalAmount = '';
        if (itemPrice > 0 && quantity > 0) {
            $scope.order.TotalAmount = itemPrice * quantity;
        }
    };

    if ($sessionStorage.cart != undefined) {
        $scope.order = $sessionStorage.cart[$routeParams.OrderID];
    }

    $scope.editOrder = function () {
        $scope.order.OrderDateTime = new Date();
        $sessionStorage.cart[$routeParams.OrderID] = $scope.order;
        $location.path("/Cart");
    };
} ];