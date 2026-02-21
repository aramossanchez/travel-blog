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

## Nomenclatura de las rutas

- El nombre del archivo json que contiene la data de la ruta tendrá la siguiente estructura:
- Fecha: con formato año, mes y día, sin separación entre valores. Por ejemplo 20251001.
- Nombre de la provincia: será el nombre de la provincia donde se hizo la ruta, en minúsculas y sin espacios. Por ejemplo ciudadreal.
- Idioma: se pondrá el idioma en el que está escrita la ruta. Por ejemplo es.
- Ejemplo de nombre de archivo: 20250930-cuenca-es.json
- Para que funcionen las traducciones en las rutas deberá de existir una versión de cada ruta es su correspondiente idioma. Para el caso anterior, serían estos 3 archivos -> 20250930-cuenca-es.json, 20250930-cuenca-en.json y 20250930-cuenca-va.json
