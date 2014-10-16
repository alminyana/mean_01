angular
  .module('app')
  .controller('newlistCtrl', ['$scope', function($scope) {
    $scope.unid = 1;
    $scope.title = "Nueva Lista";
    var items = [];
    $scope.items = items;
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
      $scope.numeroItems = $scope.items.length;
    };
    $scope.eliminar = function(id) {
      items.splice(id, 1);
      $scope.numeroItems = $scope.items.length;
    }
    $scope.numeroItems = items.length;
  }]);
