'Use strict';

angular
  .module('app', [
      'ui.router',
      'ngAnimate'
  ])
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
  }])
    //factoria que encapsula los metodos de la api modulo listas
    .factory('apiListas', ['$http', '$q', function($http, $q){
        return {
          create: function(titulo, items) {
            var lista = {
                          titulo: titulo,
                          items: items
                        };
            $http.post('/servicioListas', lista)
                .success(function (response) {
                  $state.go('todas', {}, {relodad: true});
                });
          },
          getListas: function(){
              return $http.get('/servicioListas')
                    .then(function (response) {
                      if (typeof response.data === 'object') {
                        //si es un objeto, devuelve las listas
                        console.log('factoria'+response.data);
                        return response.data;
                      } else {
                        //data invalida. no es un objeto
                        return $q.reject(response.data);
                      }
                    }, function (response) {
                      //ha ocurrido un error
                      return $q.reject(response.data);
                    })
          }, //fin getListas
          getList: function(id) {
            return $http.get('/servicioListas/'+id)
                    .then(function (response) {
                      if (typeof response.data === 'object') {
                        //es correcto
                        return response.data;
                      } else {
                        //datos no validos
                        $q.reject(response.data);
                      }
                    }, function (response) {
                      //ha ocurrido un error
                      return $q.reject(response.data);
                    })
          },  //fin getList
          deleteList: function(id) {
            return $http.delete('/servicioListas/'+id)
                    .then(function (response) { //ok
                      return;
                    }, function (response){ //error
                      $q.reject(response.data);
                    })
          },  //fin deleteList
          updateList: function(id, lista) {
            return $http.put('/servicioListas/'+id, lista)
                .then(function (response) {
                  return;
                }, function (response) {
                  //error
                  $q.reject(response.data);
                })
          }  //fin updateList      
       } //fin return    
    }])
;
