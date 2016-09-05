// Definimos el modulo (contenedor). El nombre es el que pusimos en ng-app y dentro de [] van dependencias
// ya que no usaremos ninguna ahora, lo dejaremos vacio
var tutApp = angular.module('tutApp', []);

// definimos el controlador PhoneListController dentro del tutApp module
tutApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});

