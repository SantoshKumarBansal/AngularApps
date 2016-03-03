app.config(['$routeProvider',  function ($routeProvider) {
    $routeProvider
            .when('/Home', {
                templateUrl: '../AngularJSApplication/Partials/Home.html',
                controller: 'homeController'
            })
			.when('/Login', {
			    templateUrl: '../AngularJSApplication/Partials/Login.html',
			    controller: 'loginController'
			})
            .when('/SignIn', {
                templateUrl: '../AngularJSApplication/Partials/SignIn.html',
                controller: 'signInController'
            })
            .when('/SignInUsersList', {
                templateUrl: '../AngularJSApplication/Partials/SignInUsersList.html',
                controller: 'signInUsersListController'
            })
            .when('/EditSignIn', {
                templateUrl: '../AngularJSApplication/Partials/EditSignIn.html',
                controller: 'editSignInController'
            })
            .when('/EditSignInByCustomer', {
                templateUrl: '../AngularJSApplication/Partials/EditSignInByCustomer.html',
                controller: 'editSignInByCustomerController'
            })
            .when('/ReportByState', {
                templateUrl: '../AngularJSApplication/Partials/ReportByState.html',
                controller: 'reportByStateController'
            })
            .when('/ReportByDistrict/:StateName', {
                templateUrl: '../AngularJSApplication/Partials/ReportByDistrict.html',
                controller: 'reportByDistrictController'
            })
            .when('/OrderItems', {
                templateUrl: '../AngularJSApplication/Partials/OrderItems.html',
                controller: 'orderItemsController'
            })
            .when('/EditOrder/:OrderID', {
                templateUrl: '../AngularJSApplication/Partials/EditOrder.html',
                controller: 'editOrderController'
            })
            .when('/Cart', {
                templateUrl: '../AngularJSApplication/Partials/Cart.html',
                controller: 'cartController'
            })
            .when('/OrderHistory', {
                templateUrl: '../AngularJSApplication/Partials/OrderHistory.html',
                controller: 'orderHistoryController'
            })
            .when('/AllOrdersList', {
                templateUrl: '../AngularJSApplication/Partials/AllOrdersList.html',
                controller: 'allOrdersListController'
            })
            .when('/LogOut', {
                templateUrl: '../AngularJSApplication/Partials/LogOut.html',
                controller: 'logOutController'
            })
			.otherwise({
			    templateUrl: '../AngularJSApplication/Partials/Home.html',
			    controller: 'homeController'
			});
} ]);