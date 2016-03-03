var app = angular.module("angularApplication", ["ngRoute", "ngMessages", "ngStorage"]);
app.controller("homeController", homeController);
app.controller("assignTaskController", assignTaskController);
app.controller("editAssignedTaskController", editAssignedTaskController);
app.controller("assignedTaskListController", assignedTaskListController);
