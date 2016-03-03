app.config(['$routeProvider',  function ($routeProvider) {
    $routeProvider
            .when('/Home', {
                templateUrl: '../AngularJSToDoListApplication/Partials/Home.html',
                controller: 'homeController'
            })
			.when('/AssignTask', {
			    templateUrl: '../AngularJSToDoListApplication/Partials/AssignTask.html',
			    controller: 'assignTaskController'
			})
            .when('/EditAssignedTask/:TaskID', {
                templateUrl: '../AngularJSToDoListApplication/Partials/EditAssignedTask.html',
                controller: 'editAssignedTaskController'
            })
            .when('/AssignedTaskList', {
                templateUrl: '../AngularJSToDoListApplication/Partials/AssignedTaskList.html',
                controller: 'assignedTaskListController'
            })
			.otherwise({
			    templateUrl: '../AngularJSToDoListApplication/Partials/Home.html',
			    controller: 'homeController'
			});
} ]);