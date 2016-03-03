app.config(['$routeProvider',  function ($routeProvider) {
    $routeProvider
            .when('/Home', {
                templateUrl: '../AngularApplication/Partials/Home.html',
                controller: 'homeController'
            })
			.when('/Login', {
			    templateUrl: '../AngularApplication/Partials/Login.html',
			    controller: 'loginController'
			})
            .when('/SignIn', {
                templateUrl: '../AngularApplication/Partials/SignIn.html',
                controller: 'signInController'
            })
            .when('/SignInUsersList', {
                templateUrl: '../AngularApplication/Partials/SignInUsersList.html',
                controller: 'signInUsersListController'
            })
            .when('/EditSignIn', {
                templateUrl: '../AngularApplication/Partials/EditSignIn.html',
                controller: 'editSignInController'
            })
            .when('/EditSignInByCustomer', {
                templateUrl: '../AngularApplication/Partials/EditSignInByCustomer.html',
                controller: 'editSignInByCustomerController'
            })
            .when('/ReportByState', {
                templateUrl: '../AngularApplication/Partials/ReportByState.html',
                controller: 'reportByStateController'
            })
            .when('/ReportByDistrict/:StateName', {
                templateUrl: '../AngularApplication/Partials/ReportByDistrict.html',
                controller: 'reportByDistrictController'
            })
            .when('/OrderItems', {
                templateUrl: '../AngularApplication/Partials/OrderItems.html',
                controller: 'orderItemsController'
            })
            .when('/EditOrder/:OrderID', {
                templateUrl: '../AngularApplication/Partials/EditOrder.html',
                controller: 'editOrderController'
            })
            .when('/Cart', {
                templateUrl: '../AngularApplication/Partials/Cart.html',
                controller: 'cartController'
            })
            .when('/OrderHistory', {
                templateUrl: '../AngularApplication/Partials/OrderHistory.html',
                controller: 'orderHistoryController'
            })
            .when('/AllOrdersList', {
                templateUrl: '../AngularApplication/Partials/AllOrdersList.html',
                controller: 'allOrdersListController'
            })
            .when('/LogOut', {
                templateUrl: '../AngularApplication/Partials/LogOut.html',
                controller: 'logOutController'
            })
			.otherwise({
			    templateUrl: '../AngularApplication/Partials/Home.html',
			    controller: 'homeController'
			});
} ]);