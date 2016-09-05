# Plantilla Estatica

Una pagina estatica en nodejs solo muestra informacion y no es interactivo. Lo que hemos hecho
hasta ahora es una pagina estatica.

Ahora, vamos a agregar dinamicamente. En Angular, la vista es una proyeccion de la plantilla
con lo datos del modelo. Siempre que el modelo cambia, Angular actualiza la vista.

# Vista

Dentro del archivo index.html, modifica
```html
<html ng-app="tutApp">
  <head>
    ...
    <script src="app.js"></script>
  </head>
  <body ng-controller="PhoneListController">

    <ul>
      <li ng-repeat="phone in phones">
        <span>{{ phone.name }}</span>
        <p>{{ phone.snippet }}</p>
      </li>
    </ul>

  </body>
</html>
```

Hemos cambiado el nombre de la applicacion, a "tut-app". Esto sirve para la creacion del modulo.
Asi tambien, los nombres de los telefonos harcodeados han sido cambiados por ng-repeat y 2 expresiones:
  - ng-repeat="phone in phones" es una directiva de repeticion. Esto indica a Angular de crear el <li>
  y sus contenidos por cada elemento dentro de phones
  - las expresiones en los curly braces seran reemplazados por los valores del modelo.

La directiva ng-controller pega el controlador PhoneListController con <body>. De esta forma el controlador
estara a cargo de todo el DOM dentro de body.

# Modelo y Controlador

El modelo es un objeto creado dentro del controlador. Lo usa a traves del $scope.

Creamos el archivo app.js
```javascript

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

```

El controlodor no esta haciendo mas que instanciar nuestro modelo y permitirnos el enlace del mismo con la
vista.

El $scope puede ser visto como el pegamento entre el template, modelo y el controlador. Funciona de la siguiente
forma:

![alt text](https://docs.angularjs.org/img/tutorial/tutorial_02.png)

## Next steps
Ejecuta: 

` git checkout tut-02 `
