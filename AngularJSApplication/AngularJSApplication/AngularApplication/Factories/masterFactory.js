app.factory('masterFactory', ['$http', function ($http) {
    var masterFactory = {};
    var baseurl = "../AngularJSApplication/";

    masterFactory.getStateList = function () {
        return $http.get(baseurl + "getStateList").success(function (response) { return response; });
    };
    masterFactory.getDistrictList = function (stateName) {
        return $http.post(baseurl + "getDistrictList", { stateName: stateName }).success(function (response) { return response; });
    };

    return masterFactory;
} ]);


app.factory('dataFactory', ['$http', function ($http) {
    var objectID = {};
    return objectID;
} ]);

app.factory('loginFactory', ['$http', function ($http) {
    var loginInformation = {};
    return loginInformation;
} ]);