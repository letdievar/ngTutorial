# Componentes

Un componente es una combinacion de template y controlador que pueden ser reusados y se convierten
en entidades isoladas.  
[Leer mas](https://docs.angularjs.org/guide/component)

Algo que debe tomarse en cuenta es que los componentes se crean con nombres con camelCase. Pero 
cuando es referenciado en HTML es en kebab-case. Ej, el componente llamado esteEsMiComponente, se
referencia como este-es-mi-componente.

# Editando ando
modificamos el index.html
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

## Next steps
Ejecuta: 

` git checkout tut-03 `
