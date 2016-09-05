# AngularJS
AngularJS es un framework para desarrollar aplicaciones web dinamicas. Permite
trabajar bajo la arquitectura MVC. Permite ademas data binding y dependency 
injection. 

Data binding: es la conexion entre la interfaz de usuario y el codigo detras (o
logica del negocio). O en otras palabras, entre el modelo y la vista.

Data binding: https://docs.angularjs.org/guide/databinding

Dependency injection: es una forma de resolucion de dependencias.

Debe, ademas, mencionarse que es una solucion en el lado del cliente. No hay
codigo de AngularJS que trabaja en el backend. Aun asi, permite conectarse con
servidores a traves de AJAX.

## Algunos conceptos

- Template: Es un archivo HTML, que se usa como plantilla.
- Scope: Es el contexto donde el modelo se almacena. 
- Controller: Es la logica del negocio
- Module: Es el contenedor de todas las partes de la aplicacion.

Ver mas: https://docs.angularjs.org/guide/concepts

## Resources
https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
https://github.com/toddmotto/angular-styleguide

# Inicio
Crea una carpeta app, y dentro crea un archivo index.html

```html

<!doctype html>
<html lang="en" ng-app>
  <head>
    <meta charset="utf-8">
    <title>AngularJS tutorial</title>
    <link rel="stylesheet" href="app.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
  </head>
  <body>

    <ul>
      <li>
        <span>Nexus S</span>
        <p>
          Fast just got faster with Nexus S.
        </p>
      </li>
      <li>
        <span>Motorola XOOM™ with Wi-Fi</span>
        <p>
          The Next, Next Generation tablet.
        </p>
      </li>
    </ul>

  </body>
</html>
```

Y un archivo app.css
```css
body {
  font-family: sans, "Verdana";
}
```

## Next steps
Ejecuta: 

` git checkout tut-01 `
