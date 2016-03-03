app.config(['$routeProvider',  function ($routeProvider) {
    $routeProvider
            .when('/Home', {
                templateUrl: '../AngularJSAttendanceApplication/Partials/Home.html',
                controller: 'homeController'
            })
			.when('/TeacherManagement', {
			    templateUrl: '../AngularJSAttendanceApplication/Partials/TeacherManagement.html',
			    controller: 'teacherManagementController'
			})
            .when('/AddTeacher', {
                templateUrl: '../AngularJSAttendanceApplication/Partials/AddTeacher.html',
                controller: 'addTeacherController'
            })
            .when('/EditTeacher/:TeacherID', {
                templateUrl: '../AngularJSAttendanceApplication/Partials/EditTeacher.html',
                controller: 'editTeacherController'
            })
            .when('/StudentManagement/:TeacherID', {
                templateUrl: '../AngularJSAttendanceApplication/Partials/StudentManagement.html',
                controller: 'studentManagementController'
            })
            .when('/AddStudent/:TeacherID', {
                templateUrl: '../AngularJSAttendanceApplication/Partials/AddStudent.html',
                controller: 'addStudentController'
            })
            .when('/EditStudent/:TeacherID/:StudentID', {
                templateUrl: '../AngularJSAttendanceApplication/Partials/EditStudent.html',
                controller: 'editStudentController'
            })
            .when('/AttendanceManagement/:TeacherID/:StudentID', {
                templateUrl: '../AngularJSAttendanceApplication/Partials/AttendanceManagement.html',
                controller: 'attendanceManagementController'
            })
            .when('/AddAttendance/:TeacherID/:StudentID', {
                templateUrl: '../AngularJSAttendanceApplication/Partials/AddAttendance.html',
                controller: 'addAttendanceController'
            })
            .when('/EditAttendance/:TeacherID/:StudentID/:AttendanceID', {
                templateUrl: '../AngularJSAttendanceApplication/Partials/EditAttendance.html',
                controller: 'editAttendanceController'
            })
            .when('/UploadAttendanceData', {
                templateUrl: '../AngularJSAttendanceApplication/Partials/UploadAttendanceData.html',
                controller: 'uploadAttendanceDataController'
            })
			.otherwise({
			    templateUrl: '../AngularJSAttendanceApplication/Partials/Home.html',
			    controller: 'homeController'
			});
} ]);