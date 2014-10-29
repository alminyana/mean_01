'use strict';

angular
  .module('app')
  .controller('newlistCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.unid = 1;
    $scope.title = "Nueva Lista";
    var items = [];
    $scope.items = items;
    $scope.afegir = function() {
       $scope.nuevoTitulo = $scope.nombre;
    };
    //añadir producto a la lista en memoria
    $scope.afegirProd = function() {
      var objeto = {
        nombre: $scope.nombreProd,
        unid: $scope.unid
      }
      $scope.items.push(objeto);
      //console.log(items);
      $scope.nombreProd = '';
      $scope.unid = 1;
      $scope.numeroItems = $scope.items.length;
    };
    //eliminar la lista seleccionada
    $scope.eliminar = function(id) {
      items.splice(id, 1);
      $scope.numeroItems = $scope.items.length;
    }
    $scope.numeroItems = items.length;

    //Guardar en BD una lista
    $scope.create = function() {
      var lista = {
        titulo: $scope.nuevoTitulo,
        items: $scope.items
      };
      console.log(lista);
      $http.post('/servicioListas', lista)
        .success(function(response) {
            //console.log(response);
            $location.path('/todas').replace();
        });
    }
    //numero de listas en BD
    $scope.numeroDeListas = function () {
      $http.get('/servicioListas')
        .success(function(response){
          $scope.todas = response;
          $scope.numeroListas = $scope.todas.length;
        });

    }
    $scope.numeroDeListas();
  }]);
