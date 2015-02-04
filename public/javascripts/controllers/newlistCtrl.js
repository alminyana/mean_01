'Use strict';
/////////////////////////////////////
//   CONTROLADOR vista NUEVA LISTA //
/////////////////////////////////////
angular
  .module('app')
  .controller('newlistCtrl', ['$scope', 'apiListas', '$http', '$location', '$state', function($scope, apiListas, $http, $location, $state) {
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
      };
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
    };
    $scope.numeroItems = items.length;

    //Guardar en BD una lista-- Factory apiListas
    $scope.create = function () {
      apiListas.create($scope.nuevoTitulo, $scope.items);
      $state.go('todas', {}, {relodad: true});
    };

      //Guardar en BD lista-- Método
/*    $scope.create = function() {
      var lista = {
        titulo: $scope.nuevoTitulo,
        items: $scope.items
      };
      console.log(lista);
      $http.post('/servicioListas', lista)
        .success(function(response) {
            //$location.path('/todas').reload();
            $state.go('todas',{},{reload: true});
        });
    };º*/

    //obtener numero de listas en BD -- Factory apiListas
    //utilizando la factoria 'apiListas' y promesa
    $scope.numeroDeListas = function () {
      var promesa = apiListas.getListas();
      promesa.then(function (response) {
        //console.log('pepe '+response);
        $scope.todas = response;
        $scope.numeroListas = $scope.todas.length;
      })
        
    }

    //obtener numero de listas en BD --funcion
   /*$scope.numeroDeListas = function () {
      $http.get('/servicioListas')
        .success(function(response){
          $scope.todas = response;
          $scope.numeroListas = $scope.todas.length;
        });

    };*/
    $scope.numeroDeListas();
  }]);
