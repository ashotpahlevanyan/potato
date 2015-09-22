 app = angular.module('potatoApp', ['ngRoute']);


//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/list',
            {
                controller: 'ListController',
                templateUrl: '/app/partials/list.html'
            })
        .when('/detail',
            {
                controller: 'DetailController',
                templateUrl: '/app/partials/detail.html'
            })
        .otherwise({ redirectTo: '/list' });
});