app.config(['$routeProvider',  function ($routeProvider) {
    $routeProvider
            .when('/Home', {
                templateUrl: '../AngularJSBlogApplication/Partials/Home.html',
                controller: 'homeController'
            })
			.when('/Login', {
			    templateUrl: '../AngularJSBlogApplication/Partials/Login.html',
			    controller: 'loginController'
			})
            .when('/SignIn', {
                templateUrl: '../AngularJSBlogApplication/Partials/SignIn.html',
                controller: 'signInController'
            })
            .when('/PostAdministration', {
                templateUrl: '../AngularJSBlogApplication/Partials/PostAdministration.html',
                controller: 'postAdministrationController'
            })
            .when('/CreatePost', {
                templateUrl: '../AngularJSBlogApplication/Partials/CreatePost.html',
                controller: 'createPostController'
            })
            .when('/EditPost/:id', {
                templateUrl: '../AngularJSBlogApplication/Partials/EditPost.html',
                controller: 'editPostController'
            })
            .when('/AllPublishedPostList', {
                templateUrl: '../AngularJSBlogApplication/Partials/AllPublishedPostList.html',
                controller: 'allPublishedPostListController'
            })
            .when('/AllPublishedPostList/:tag', {
                templateUrl: '../AngularJSBlogApplication/Partials/AllPublishedPostList.html',
                controller: 'allPublishedPostListController'
            })
            .when('/PostDetails/:id', {
                templateUrl: '../AngularJSBlogApplication/Partials/PostDetails.html',
                controller: 'postDetailsController'
            })
            .when('/LogOut', {
                templateUrl: '../AngularJSBlogApplication/Partials/LogOut.html',
                controller: 'logOutController'
            })
			.otherwise({
			    templateUrl: '../AngularJSBlogApplication/Partials/Home.html',
			    controller: 'homeController'
			});
} ]);