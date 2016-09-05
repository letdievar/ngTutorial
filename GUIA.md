# Componentes

Un componente es una combinacion de template y controlador que pueden ser reusados y se convierten
en entidades isoladas.  
[Leer mas](https://docs.angularjs.org/guide/component)

Algo que debe tomarse en cuenta es que los componentes se crean con nombres con camelCase. Pero 
cuando es referenciado en HTML es en kebab-case. Ej, el componente llamado esteEsMiComponente, se
referencia como este-es-mi-componente.

# Editando ando
Modificamos el index.html. Mire los cambios...
```html
<html ng-app="tutApp">
<head>
  ...
  <script src="app.js"></script>
  <script src="phone-list.component.js"></script>
</head>
<body>

  <!-- Llamamos al componente -->
  <phone-list></phone-list>

</body>
</html>
```

Modificamos app/app.js
```javascript
var tutApp = angular.module('tutApp', []);
```

Creamos el archivo app/phone-list.component.js:
```javascript
angular.
  module('tutApp').
  component('phoneList', {
    template:
        '<ul>' +
          '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
        '</ul>',
    controller: function PhoneListController() {
      this.phones = [
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
    }
  });
```

Con esto se logra que la lista de telefonos sea reusables. Solo se requeriria poner
<phone-list> en cualquier lado de la pagina.

El componente esta libre de influencias externas.

![alt-test](https://docs.angularjs.org/img/tutorial/tutorial_03.png "Imagen")
## Next steps
Ejecuta: 

` git checkout tut-03 `
