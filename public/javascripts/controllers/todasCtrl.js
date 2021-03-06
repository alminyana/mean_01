'Use strict';
////////////////////////////////////
//   CONTROLADOR vista VER LISTAS //
////////////////////////////////////

angular
  .module('app')
  .controller('todasCtrl', ['$scope', 'apiListas', '$http', '$stateParams', '$location', '$state', function($scope, apiListas, $http, $stateParams, $location, $state) {

    $scope.vistasTitulo = "Mis Listassss";
    $scope.renderListasResponse = function(response) {
      $scope.listaDeListas = response;
      //console.log(response);
    };
    $scope.renderUnaListaResponse = function(response) {
      $scope.selec = response;
    };
    $scope.obtenerTodas = function() {
      var promise = apiListas.getListas();
      promise.then($scope.renderListasResponse);
    };

    //obtener el id seleccionado
    //$scope.listaSeleccionada = $stateParams.lista;

    //obtener lista de la bd con el id de lista seleccionada
    $scope.obtenerUna = function (id) {
      var promesa = apiListas.getList(id);
      promesa.then($scope.renderUnaListaResponse);
    };

    //obtener la lista del array de listas ya leido por metodo obtenerTodas()
    /*
    $scope.obtenerUna = function (id) {
      //console.log($scope.listaDeListas);
      angular.forEach($scope.listaDeListas, function(value, key) {
        //console.log(value);
        //console.log(value._id);
        if (value._id === id) {
          $scope.objeto = value;
        }
        return $scope.objeto;
      });
    };
    */
    //borrar lista de la BD
    $scope.borrar = function(id) {
      var promesa = apiListas.deleteList(id);
      promesa.then(function(){
        $scope.obtenerTodas()
        $state.go('todas',{},{reload: true});
      });
          
      /*$http.delete('/servicioListas/'+id)
        .success(function (response){
          $scope.obtenerTodas();
        });
        $state.go('todas',{},{reload: true});
      ;*/
      }
    //guardar cambios de una lista en BD
    $scope.guardarCanvis = function (id) {
      //console.log(id);
      var lista_para_update = {
        titulo: $scope.selec.titulo,
        items: $scope.selec.items
      };
      var promesa = apiListas.updateList(id, lista_para_update);
      promesa.then($scope.obtenerTodas());


      // $http.put('/servicioListas/'+id, lista_para_update)
      //   .success(function (response){
      //     $scope.obtenerTodas();
      //   });
        $state.go('todas',{},{reload: true});

      //$location.path('/todas').replace();
      //window.location.reload();
    };
    //btn close en ver y editar lista
    $scope.cerrarLista = function() {
      $state.go('todas',{},{reload: true});
    };

    //borrar item de la lista
    $scope.borrarProducto = function(id) {
      $scope.selec.items.splice(id,1);
      //console.log($scope.selec);
    };

    //obtener todas las listas de la BD
    $scope.obtenerTodas();


  }]);
