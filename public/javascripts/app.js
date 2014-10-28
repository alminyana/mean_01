angular
  .module('app', [
      'ui.router'
  ])
  .factory('Lista', function(){
    
  })
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');
    //$locationProvider.html5Mode(true);
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
        .state('todas', { //todas las listas
          url: '/todas',
          templateUrl: './templates/todas.html',
          controller: 'todasCtrl'
        })
        .state('todas.lista', { //ver una lista seleccionada
          url: '/:lista',
          templateUrl: './templates/una.html',
          controller: 'todasCtrl'
        })
        .state('todas.edit', {  //editar una lista seleccionada
          url: '/edit/:lista',
          templateUrl: './templates/editUna.html',
          controller: 'todasCtrl'
        });
  }]);
