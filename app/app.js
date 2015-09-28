var app = angular.module('potatoApp', ['ngRoute', 'ngResource', 'angular-momentjs']);

app.config(function ($momentProvider){
    $momentProvider
      .asyncLoading(false)
      .scriptUrl('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js');
  });

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/list',
            {
                controller: 'ImageListController',
                templateUrl: '/app/partials/list.html'
            })
        .when('/detail/:itemID',
            {
                controller: 'ImageDetailController',
                templateUrl: '/app/partials/detail.html'
            })
        .otherwise({ redirectTo: '/list' });
});

