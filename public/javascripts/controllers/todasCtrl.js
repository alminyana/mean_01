angular
  .module('app')
  .controller('todasCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    $scope.title = "Todas las Listas";
    $scope.saludo = function(id) {
      alert('Lista de identificador: '+id);
    }

    $scope.renderListasResponse = function(response) {
      $scope.listaDeListas = response;
      //console.log(response);
    };
    $scope.obtenerTodas = function() {
      $http.get('/servicioListas')
        .success($scope.renderListasResponse);
    };
    //obtener el id seleccionado
    $scope.listaSeleccionada = $stateParams.lista;
    //obtener la lista del array de listas
    $scope.obtenerUna = function (id){
      console.log($scope.listaDeListas);
      angular.forEach($scope.listaDeListas, function(value, key) {
        //console.log(value);
        //console.log(value._id);
        if (value._id === id) {
          $scope.objeto = value;
        }
        return $scope.objeto;
      });
    };
    $scope.obtenerTodas();
  }]);
