var tutApp = angular.module('tutApp', []);

tutApp.controller('todoController', function todoController($scope) {
  // Iniciamos una lista vacia
  $scope.todo_list = [];

  // creamos la funcion que agrega un nuevo item
  $scope.addItem = function() {

    // creamos una instancia
    var aux = {
      description: $scope.item_input,
    };

    // lo agregamos a la lista
    $scope.todo_list.push(aux);

    // y yata'
  };

  // la funcion para eliminar
  $scope.remove = function(e) {
    // tarea :)
  };
});
