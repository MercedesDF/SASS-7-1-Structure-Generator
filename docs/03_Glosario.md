
# Glosario de Términos: SASS 7-1 Structure Generator

Este glosario define términos clave relacionados con la aplicación "SASS 7-1 Structure Generator", las tecnologías que utiliza y los conceptos relevantes para la estructura SASS que genera.

---

**7-1 Architecture Pattern (Patrón de Arquitectura 7-1)**
:   Una convención para organizar proyectos SASS en siete directorios diferentes (abstracts, base, components, layout, pages, themes, vendors) y un archivo principal (`main.scss`) que los importa todos. Facilita la escalabilidad y mantenibilidad de las hojas de estilo.

**Abstracts (SASS)**
:   Directorio en la arquitectura 7-1 que contiene herramientas y ayudantes SASS como variables, funciones, mixins y placeholders. No produce ninguna salida CSS por sí mismo.

**API (Application Programming Interface / Interfaz de Programación de Aplicaciones)**
:   Un conjunto de reglas y protocolos que permite que diferentes componentes de software se comuniquen entre sí. En este proyecto, no se usa una API externa, pero el concepto es relevante en desarrollo web.

**App.tsx**
:   El componente principal de React en esta aplicación generadora. Contiene la interfaz de usuario (UI) y la lógica de interacción principal.

**Base (SASS)**
:   Directorio en la arquitectura 7-1 que contiene estilos boilerplate para el proyecto. Esto incluye estilos para elementos HTML básicos (como tipografía, resets) que se aplican globalmente.

**Blob (Binary Large Object)**
:   Un tipo de dato que puede almacenar datos binarios. En este proyecto, JSZip genera el archivo ZIP como un Blob antes de que FileSaver.js lo descargue.

**Boilerplate**
:   Un conjunto de código estándar o una plantilla que se utiliza como punto de partida para nuevos proyectos. El generador crea un boilerplate para proyectos SASS 7-1.

**CDN (Content Delivery Network / Red de Distribución de Contenidos)**
:   Una red de servidores distribuidos geográficamente que trabajan juntos para proporcionar una entrega rápida de contenido de Internet. En este proyecto, Tailwind CSS se carga desde un CDN.

**Component (React / Componente)**
:   Una pieza de código reutilizable y autónoma que define una parte de la interfaz de usuario. React se basa en componentes.

**Components (SASS / Componentes)**
:   Directorio en la arquitectura 7-1 que contiene estilos para componentes de UI discretos y reutilizables (ej. botones, tarjetas, modales).

**Constants (Constantes)**
:   Valores que no cambian durante la ejecución de un programa. En `constants/fileTemplates.ts` se almacenan las plantillas de contenido de los archivos.

**CSS (Cascading Style Sheets / Hojas de Estilo en Cascada)**
:   Un lenguaje de hojas de estilo utilizado para describir la presentación de un documento escrito en HTML o XML. SASS compila a CSS, que es lo que los navegadores entienden para aplicar estilos visuales a las páginas web.

**DOM (Document Object Model / Modelo de Objetos del Documento)**
:   Una representación estructurada (como un árbol) del contenido de un documento HTML o XML. JavaScript puede interactuar con el DOM para modificar dinámicamente el contenido y la estructura de una página web.

**ESM (ECMAScript Modules)**
:   El sistema de módulos estándar de JavaScript. Permite dividir el código en archivos reutilizables (módulos) y usar `import` y `export` para compartir funcionalidades. `esm.sh` es un CDN que sirve paquetes npm como módulos ES.

**FileSaver.js**
:   Una librería de JavaScript que facilita la descarga de archivos en el lado del cliente. Se utiliza para guardar el archivo ZIP generado.

**Framework (Marco de trabajo)**
:   Una estructura de software que proporciona una base para desarrollar aplicaciones. React es una librería, pero a menudo se usa en el contexto de frameworks más amplios. Vite es un framework de herramientas de frontend.

**GitHub**
:   Una plataforma de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git.

**GitHub Pages**
:   Un servicio de alojamiento de sitios estáticos que toma archivos HTML, CSS y JavaScript directamente desde un repositorio en GitHub, opcionalmente los construye a través de un proceso de compilación y publica un sitio web.

**HTML (HyperText Markup Language / Lenguaje de Marcado de Hipertexto)**
:   El lenguaje de marcado estándar para crear páginas web y aplicaciones web.

**Hook (React)**
:   Funciones especiales en React (como `useState`, `useEffect`, `useCallback`) que permiten "enganchar" funcionalidades de React (como el estado y el ciclo de vida) en componentes funcionales.

**Interface (TypeScript / Interfaz)**
:   Una forma de definir la "forma" de un objeto en TypeScript, especificando los nombres y tipos de sus propiedades. Se usa en `types.ts`.

**JavaScript**
:   Un lenguaje de programación de alto nivel, interpretado, que se utiliza principalmente para crear interactividad en las páginas web.

**JSZip**
:   Una librería de JavaScript para crear, leer y modificar archivos `.zip` en el navegador.

**JSX (JavaScript XML)**
:   Una extensión de la sintaxis de JavaScript que permite escribir estructuras similares a HTML dentro del código JavaScript. Es comúnmente utilizada con React para describir la estructura de la UI.

**Layout (SASS / Diseño)**
:   Directorio en la arquitectura 7-1 que contiene estilos para las partes principales de la estructura de una página (ej. encabezado, pie de página, barra lateral, rejilla).

**Librería (Library)**
:   Una colección de código preescrito que los desarrolladores pueden usar para realizar tareas comunes sin tener que escribir el código desde cero (ej. React, JSZip).

**main.scss (SASS)**
:   El archivo SASS principal en la arquitectura 7-1. Actúa como el punto de entrada que importa todos los demás parciales SASS. En este proyecto, se encuentra en `src/sass/main.scss`.

**Minificación (Minification)**
:   El proceso de eliminar todos los caracteres innecesarios del código fuente (como espacios en blanco, comentarios, nombres de variables más cortos) sin cambiar su funcionalidad, para reducir el tamaño del archivo.

**Mixin (SASS)**
:   Una característica de SASS que permite definir estilos reutilizables que pueden incluirse en otras reglas de estilo. Son similares a las funciones pero para bloques de CSS.

**Módulo (Module)**
:   Una unidad de código independiente y reutilizable. JavaScript moderno utiliza módulos ES para organizar el código.

**NPM (Node Package Manager)**
:   El gestor de paquetes por defecto para Node.js. Se utiliza para instalar y gestionar dependencias de proyectos.

**Node.js**
:   Un entorno de ejecución de JavaScript del lado del servidor. Aunque esta aplicación se ejecuta en el cliente, herramientas como Vite y npm a menudo se usan en el entorno de desarrollo Node.js.

**Pages (SASS / Páginas)**
:   Directorio en la arquitectura 7-1 que contiene estilos específicos para páginas individuales del sitio web (ej. página de inicio, página de contacto).

**Parcial (SASS Partial)**
:   Archivos SASS cuyos nombres comienzan con un guion bajo (ej. `_variables.scss`). Indican a SASS que no deben compilarse en un archivo CSS individual, sino que están destinados a ser importados en otros archivos SASS.

**Props (React / Propiedades)**
:   Abreviatura de "properties". Son argumentos que se pasan a los componentes de React para configurarlos o pasarles datos, de forma similar a los atributos HTML.

**React**
:   Una librería de JavaScript para construir interfaces de usuario, especialmente aplicaciones de una sola página (SPA), utilizando un enfoque basado en componentes.

**README.md**
:   Un archivo común en proyectos de software que proporciona información sobre el proyecto, cómo configurarlo, usarlo, etc. Se escribe en formato Markdown.

**SASS (Syntactically Awesome Style Sheets / Hojas de Estilo Sintácticamente Asombrosas)**
:   Un preprocesador de CSS que añade características como variables, mixins, anidamiento y funciones a CSS, lo que ayuda a escribir CSS más mantenible y potente. El código SASS se compila a CSS estándar.

**SCSS (Sassy CSS)**
:   La sintaxis más nueva y popular de SASS. Es un superconjunto de CSS, lo que significa que todo el código CSS válido es también SCSS válido. Utiliza llaves `{}` y puntos y coma `;` como CSS.

**SPA (Single Page Application / Aplicación de Página Única)**
:   Una aplicación web que carga una única página HTML y luego actualiza dinámicamente el contenido de esa página a medida que el usuario interactúa con la aplicación, en lugar de cargar páginas HTML completamente nuevas desde el servidor.

**Estado (React / State)**
:   Datos que un componente de React gestiona internamente. Cuando el estado de un componente cambia, React vuelve a renderizar el componente para reflejar los cambios en la UI. Se gestiona con el hook `useState`.

**Tailwind CSS**
:   Un framework de CSS "utility-first" que proporciona clases de bajo nivel para construir diseños personalizados directamente en el HTML, sin escribir CSS personalizado.

**Themes (SASS / Temas)**
:   Directorio en la arquitectura 7-1 que contiene estilos para diferentes temas visuales de un sitio (ej. tema oscuro, tema claro, o temas estacionales).

**TypeScript**
:   Un superconjunto de JavaScript que añade tipado estático opcional al lenguaje. Ayuda a detectar errores durante el desarrollo y mejora la legibilidad y mantenibilidad del código.

**UI (User Interface / Interfaz de Usuario)**
:   La parte de una aplicación con la que el usuario interactúa visualmente.

**UX (User Experience / Experiencia de Usuario)**
:   La experiencia general de una persona al usar un producto, especialmente en términos de lo fácil o agradable que es de usar.

**Vendors (SASS / Proveedores)**
:   Directorio en la arquitectura 7-1 que contiene estilos de bibliotecas o frameworks de terceros (ej. Normalize.css, Bootstrap si solo se usan sus estilos SASS).

**Vite (Pronunciado "vit", como "rápido" en francés)**
:   Una herramienta de frontend moderna que proporciona un servidor de desarrollo extremadamente rápido y compila el código para producción. Soporta TypeScript, JSX, SASS y más, sin configuración extensa.

**ZIP (Formato de archivo)**
:   Un formato de archivo de compresión que puede contener uno o más archivos o directorios. Esta aplicación genera un archivo ZIP.
