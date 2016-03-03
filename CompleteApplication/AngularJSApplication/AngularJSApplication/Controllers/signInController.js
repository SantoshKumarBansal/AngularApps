var signInController = ["$rootScope", "$scope", "$http", "$location", "$localStorage", "$sessionStorage", "$filter", "masterFactory", "dataFactory", "loginFactory", function ($rootScope, $scope, $http, $location, $localStorage, $sessionStorage, $filter, masterFactory, dataFactory, loginFactory) {
    //    if (loginFactory.loginInformation != undefined) {
    //        $location.path("/Home");
    //    }

    if ($sessionStorage.loginInformation != undefined) {
        $location.path("/Home");
    }

    $scope.signIn = {};
    $scope.stateList = {};
    $scope.districtList = {};
    $scope.hobbiesList = ["Cricket", "Music", "Movies"];
    $scope.hobbiesSelection = [];
    
    $scope.toggleHobbies = function toggleHobbies(hobby) {
        var idx = $scope.hobbiesSelection.indexOf(hobby);
        // is currently selected
        if (idx > -1) {
            $scope.hobbiesSelection.splice(idx, 1);
        }
        // is newly selected
        else {
            $scope.hobbiesSelection.push(hobby);
        }
    };

    $scope.$watch('signIn.Name', function (val) {
        $scope.signIn.Name = $filter('uppercase')(val);
    }, true);

    masterFactory.getStateList().success(function (response) {
        $scope.stateList = response;
    });

    $scope.getDistrictList = function (stateName) {
        masterFactory.getDistrictList(stateName).success(function (response) {
            $scope.signIn.District = '';
            $scope.districtList = response;
        });
    };

    $scope.saveSignInInformation = function () {
        $http.post("../AngularJSApplication/isAlreadySignIn", { eMailID: $scope.signIn.EMailID })
        .success(function (response) {
            if (response == "Success") {
                $scope.signIn.Hobbies = $scope.hobbiesSelection;
                $scope.signIn.Orders = $scope.Orders;
                $http.post("../AngularJSApplication/saveSignInInformation", { signIn: JSON.stringify($scope.signIn) })
                .success(function (response) {
                    $location.path("/Login");
                });
            }
            else {
                alert("You have already Sign In Using E-Mail ID : " + $scope.signIn.EMailID + ". Please Sign In using another E-Mail ID.");
            }
        });
    };
} ];
