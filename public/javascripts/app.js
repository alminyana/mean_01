angular
  .module('app', [
      'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
          url: '/',
          templateUrl: './templates/home.html',
          controller: 'homeCtrl'
        })
        .state('newlist', {
          url: '/newlist',
          templateUrl: './templates/newlist.html',
          controller: 'newlistCtrl'
        })
        .state('todas', {
          url: '/todas',
          templateUrl: './templates/todas.html',
          controller: 'todasCtrl'
        });
  }]);
