angular
  .module('app')
  .controller('newlistCtrl', ['$scope', function($scope) {
    $scope.unid = 1;
    $scope.title = "Nueva Lista";
    var items = [];
    $scope.items = items;
    $scope.numeroItems = $scope.items.length;
    $scope.afegir = function() {
       $scope.nuevoTitulo = $scope.nombre;
    };
    $scope.afegirProd = function() {
      var objeto = {
        id: $scope.nombreProd,
        nombre: $scope.nombreProd,
        unid: $scope.unid
      }
      $scope.items.push(objeto);
      console.log(items);
      $scope.nombreProd = '';
      $scope.unid = 1;
    };

  }]);
