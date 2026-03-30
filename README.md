# PEC1 - Islas Eolias

Proyecto de la PEC1 de la asignatura Herramientas HTML y CSS II.

Se trata de un sitio web responsive de una sola pagina sobre las Islas Eolias, desarrollado a partir de UOC Boilerplate.

## Requisitos tecnicos

- Node.js >= 18
- npm

## Instalacion

```bash
npm install
```

## Comandos

```bash
# Desarrollo
npm run dev

# Lint de estilos
npm run stylelint

# Build de produccion
npm run build
```

## Estructura del proyecto

```text
src/
  index.html
  assets/
    images/
    scripts/
      main.js
    styles/
      _dependencies.scss
      _variables.scss
      _functions.scss
      _mixins.scss
      _base.scss
      main.scss
      layouts/
        _home.scss
  views/
    footer.html
```

## Criterios aplicados en la PEC

- Maquetacion semantica HTML5 en una sola pagina.
- Responsive con enfoque mobile-first.
- Metodologia BEM para nombrado de clases.
- Sass con uso de:
  - variables
  - anidado
  - funciones propias
  - parciales
  - importacion modular con `@use`
- Dependencia externa: Font Awesome.
- Stylelint configurado y validado sin errores.
