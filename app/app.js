var app = angular.module('potatoApp', ['ui.router', 'ngResource', 'angular-momentjs']);

app.config(function ($momentProvider){
    $momentProvider
      .asyncLoading(false)
      .scriptUrl('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js');
  });

//This configures the routes and associates each route with a view and a controller
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/list')
    $stateProvider
        .state('list',
            {
                url: '/list',
                templateUrl: '/app/partials/list.html',
                controller: 'ImageListController'
            })
        .state('detail',
            {
                url: '/detail/:id',
                templateUrl: '/app/partials/detail.html',
                controller: 'ImageDetailController'
            });
}]);

