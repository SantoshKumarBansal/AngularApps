var editSignInController = ["$rootScope", "$scope", "$http", "$location", "$localStorage", "$sessionStorage", "$filter", "masterFactory", "dataFactory", "loginFactory", function ($rootScope, $scope, $http, $location, $localStorage, $sessionStorage, $filter, masterFactory, dataFactory, loginFactory) {
//    if (loginFactory.loginInformation == undefined) {
//        $location.path("/Login");
//    }

    if ($sessionStorage.loginInformation == undefined) {
        $location.path("/Login");
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

    $http.post("../AngularJSApplication/getSignInInformation", { id: $sessionStorage.objectID })
        .success(function (response) {
            $scope.signIn = response[0];
            $scope.signIn.DOB = new Date($scope.signIn.DOB);
            $scope.hobbiesSelection = $scope.signIn.Hobbies;
            masterFactory.getDistrictList($scope.signIn.State).success(function (response) {
                $scope.districtList = response;
            });
        });

    $scope.editSignInInformation = function () {
        $scope.signIn.Hobbies = $scope.hobbiesSelection;
        $scope.signIn._id = { "$oid": $sessionStorage.objectID };
        $http.post("../AngularJSApplication/editSignInInformation", { signIn: JSON.stringify($scope.signIn) })
        .success(function (response) {
            $location.path("/SignInUsersList");
        });
    };
} ];
