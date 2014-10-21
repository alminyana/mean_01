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
        })
        .state('todas.lista', {
          url: '/:lista',
          templateUrl: './templates/una.html',
          controller: 'todasCtrl'
        })
        .state('todas.edit', {
          url: '/edit/:lista',
          templateUrl: './templates/editUna.html',
          controller: 'todasCtrl'
        });
  }]);
