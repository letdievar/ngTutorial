# Good Practices
[Good practices](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)

Tomar en cuenta que hacerlo mas simple y modular, cada entidad o caracteristica debe estar 
en un archivo separado.

## Organizando
Debemos organizar los archivos dependiendo de sus caracteristicas. Por ejemplo, para la 
lista de telefonos ponemos todo lo relacionado con ello  dentro de phone-list/ dentro de app/.

## Usando modulos
Para que phone-list pueda ser usado por cualquier otra aplicacion y pueda ser realmente
isolado, creamos un modulo unico para ello.

Primero, creamos el modulo. En app/phone-list/phone-list.module.js:
Note que se parece mucho a como se inicia el modulo para tutApp
```javascript
angular.module('phoneList', []);
```

Luego, modificamos el archivo app/phone-list/phone-list.component.js para que el componente
sea creado en el modulo phoneList y no dentor de tutApp.
```javascript
angular.
  module('phoneList').
  component('phoneList', {
  ...
```

Ahora, el archivo app.js, ponemos como dependencia a nuestro modulo phoneList
```javascript
var tutApp = angular.module('tutApp', [
    'phoneList'
]);
```

Ahora, para sellar todo, ponemos en nuestro index.html
```html
  ...
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
    <script src="app.js"></script>
    <script src="phone-list/phone-list.module.js"></script>
    <script src="phone-list/phone-list.component.js"></script>
  </head>
  ...
```

Refresque la pagina. Ahora, para usar las plantillas, creamos el archivo
app/phone-list/phone-list.template.html
```html
  <ul>
    <li ng-repeat="phone in $ctrl.phones">
      <span>{{phone.name}}</span>
      <p>{{phone.snippet}}</p>
    </li>
  </ul>
```

Y cambiamos app/phone-list/phone-list.component.js
```javascript
  component('phoneList', {
    templateUrl: 'app/phone-list/phone-list.template.html'
```

## Next steps
Ejecuta: 

` git checkout tut-04 `
