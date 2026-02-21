# Arquitectura de travel-blog

## Stack

- next: versión 15.5.2
- next-intl: versión ^4.3.9
- react: versión 19.1.0
- react-dom: versión 19.1.0
- @eslint/eslintrc: versión ^3
- @tailwindcss/postcss: versión ^4
- @types/node: versión ^20
- @types/react: versión ^19
- @types/react-dom: versión ^19
- eslint: versión ^9
- eslint-config-next: versión 15.5.2
- tailwindcss: versión ^4
- typescript: versión ^5

## Estructura de Carpetas

/app
--/[locale]
----/api -> rutas api
----(routes) -> rutas de página
/atoms -> se guardan los componentes más pequeños(por ejemplo button) para ser usados en toda la app
/data -> se guardan los json en los que se guarda la información que usara la app para pintar información. los json se guardan en carpetas de idiomas
/hooks -> se guardan hooks usados en toda la app
/i18n -> se guarda el archivo request.ts para realizar las traducciones de la app
/messages -> se guardan los json donde se encuentran las traducciones para la internalización de la app
/molecules -> se guardan los components de las secciones(por ejemplo card) de cada organism
/organism -> se guardan los components de las secciones(por ejemplo presentation) de cada template
/public -> se guardan todas las imágenes usadas en la app
/services -> se guardan funciones usadas en varias partes de la app
/templates -> se guardan los main containers de cada vista
/utils -> se guardan constantes y tipos usados en toda la app
