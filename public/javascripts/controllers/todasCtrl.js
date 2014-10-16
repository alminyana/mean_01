angular
  .module('app')
  .controller('todasCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.title = "Toas las Listas";

    $scope.renderListasResponse = function(response) {
      $scope.listaDeListas = response;
      console.log(response);
    };
    $scope.obtenerTodas = function() {
      $http.get('/servicioListas')
        .success($scope.renderListasResponse);
    };
    $scope.obtenerTodas();
  }]);
