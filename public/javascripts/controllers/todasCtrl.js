angular
  .module('app')
  .controller('todasCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    $scope.title = "Todas las Listas";
    $scope.saludo = function(id) {
      //alert('Lista de identificador: '+id);
    }
    $scope.kaka = 'Mensaje del controlador';
    $scope.renderListasResponse = function(response) {
      $scope.listaDeListas = response;
      //console.log(response);
    };
    $scope.renderUnaListaResponse = function(response) {
      $scope.selec = response;
    };
    $scope.obtenerTodas = function() {
      $http.get('/servicioListas')
        .success($scope.renderListasResponse);
    };

    //obtener el id seleccionado
    //$scope.listaSeleccionada = $stateParams.lista;
    //obtener lista de la bd con el id de lista seleccionada

    $scope.obtenerUna = function (id) {
      
      $http.get('/servicioListas/'+id)
        .success(function (response) {
          console.log(response);
          $scope.selec = response;
        });
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
    $scope.borrar = function(id) {
      $http.delete('/servicioListas/'+id)
        .success(function (response){
          $scope.obtenerTodas();
        });
      //console.log(id);
    };


    $scope.obtenerTodas();
  }]);
