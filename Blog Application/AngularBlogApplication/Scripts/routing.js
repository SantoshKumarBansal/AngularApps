app.config(['$routeProvider',  function ($routeProvider) {
    $routeProvider
            .when('/Home', {
                templateUrl: '../AngularBlogApplication/Partials/Home.html',
                controller: 'homeController'
            })
			.when('/Login', {
			    templateUrl: '../AngularBlogApplication/Partials/Login.html',
			    controller: 'loginController'
			})
            .when('/SignIn', {
                templateUrl: '../AngularBlogApplication/Partials/SignIn.html',
                controller: 'signInController'
            })
            .when('/PostAdministration', {
                templateUrl: '../AngularBlogApplication/Partials/PostAdministration.html',
                controller: 'postAdministrationController'
            })
            .when('/CreatePost', {
                templateUrl: '../AngularBlogApplication/Partials/CreatePost.html',
                controller: 'createPostController'
            })
            .when('/EditPost/:id', {
                templateUrl: '../AngularBlogApplication/Partials/EditPost.html',
                controller: 'editPostController'
            })
            .when('/AllPublishedPostList', {
                templateUrl: '../AngularBlogApplication/Partials/AllPublishedPostList.html',
                controller: 'allPublishedPostListController'
            })
            .when('/AllPublishedPostList/:tag', {
                templateUrl: '../AngularBlogApplication/Partials/AllPublishedPostList.html',
                controller: 'allPublishedPostListController'
            })
            .when('/PostDetails/:id', {
                templateUrl: '../AngularBlogApplication/Partials/PostDetails.html',
                controller: 'postDetailsController'
            })
            .when('/LogOut', {
                templateUrl: '../AngularBlogApplication/Partials/LogOut.html',
                controller: 'logOutController'
            })
			.otherwise({
			    templateUrl: '../AngularBlogApplication/Partials/Home.html',
			    controller: 'homeController'
			});
} ]);