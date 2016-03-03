var mainController = ["$rootScope", "$scope", "$http", "$location", "$localStorage", "$sessionStorage", "masterFactory", "dataFactory", "loginFactory", function ($rootScope, $scope, $http, $location, $localStorage, $sessionStorage, masterFactory, dataFactory, loginFactory) {
    //    $rootScope.welcome = "Welcome, Guest";
    //    $rootScope.menuType = "Guest";
    //    
    //    if (loginFactory.loginInformation != undefined) {
    //        $rootScope.welcome = "Welcome " + loginFactory.loginInformation.Name;
    //        $rootScope.menuType = loginFactory.loginInformation.UserType;
    //    }

    $sessionStorage.welcome = "Welcome, Guest";
    $sessionStorage.menuType = "Guest";

    if ($sessionStorage.loginInformation != undefined) {
        $sessionStorage.welcome = "Welcome " + $sessionStorage.loginInformation.Name;
        $sessionStorage.menuType = $sessionStorage.loginInformation.UserType;
    }

    $rootScope.welcome = $sessionStorage.welcome;
    $rootScope.menuType = $sessionStorage.menuType;
} ];
