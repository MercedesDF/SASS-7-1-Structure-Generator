
# SASS 7-1 Structure Generator

Este documento describe el "SASS 7-1 Structure Generator", una aplicación web del lado del cliente diseñada para ayudar a iniciar rápidamente nuevos proyectos web con una estructura de directorios y archivos SASS 7-1 bien organizada.

[Ver aplicación en acción](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://mercedesdf.github.io/SASS-7-1-Structure-Generator/)

## ¿Qué hace?

La aplicación genera un archivo `.zip` que contiene:

*   Una estructura de directorios SASS completa siguiendo el patrón 7-1 (`abstracts`, `base`, `components`, `layout`, `pages`, `themes`, `vendors`).
*   Archivos SASS parciales (`_index.scss`, `_variables.scss`, etc.) con contenido básico y comentarios como guía.
*   Un archivo `main.scss` principal que importa toda la estructura.
*   Un archivo `src/main.js` que importa `main.scss`.
*   Un `index.html` de prueba para visualizar los estilos.
*   Un archivo `vite.config.js` básico para usar con Vite.
*   Un archivo `README.md` (para el proyecto generado) explicando la estructura SASS.
*   Un archivo `LICENSE` (MIT) para el código boilerplate generado.

## Tecnologías Utilizadas (para este Generador)

*   **React (v19)**: Para la interfaz de usuario.
*   **TypeScript**: Para un desarrollo más robusto.
*   **Tailwind CSS**: Para el estilizado de esta aplicación generadora (cargado vía CDN).
*   **JSZip**: Para crear el archivo `.zip` en el navegador.
*   **FileSaver.js**: Para permitir la descarga del archivo `.zip`.
*   **Vite**: Como herramienta de compilación y servidor de desarrollo.
*   **npm/yarn**: Para la gestión de dependencias del proyecto.

## Cómo Visualizar/Ejecutar esta Aplicación Generadora

Esta aplicación está configurada para ser desarrollada y ejecutada usando **Vite**. Se requiere Node.js y npm (o yarn) instalados.

1.  **Clonar el repositorio o disponer de los archivos del proyecto.**
2.  **Navegar a la carpeta raíz** de la aplicación en la terminal (donde se encuentra este `README.md`, `index.html`, `package.json`, etc.).
    ```bash
    cd /ruta/a/la/carpeta/sass-7-1-structure-generator
    ```
3.  **Instalar las dependencias:**
    ```bash
    npm install
    ```
    O si se usa yarn:
    ```bash
    yarn install
    ```
4.  **Iniciar el servidor de desarrollo de Vite:**
    ```bash
    npm run dev
    ```
    O si se usa yarn:
    ```bash
    yarn dev
    ```
5.  Vite iniciará el servidor y proporcionará una URL (generalmente `http://localhost:5173` o similar) que se puede abrir en el navegador.

Para desplegar la aplicación en un entorno de producción (por ejemplo, en un hosting estático), se pueden generar los archivos optimizados ejecutando:
```bash
npm run build
```
Esto creará una carpeta `dist/` con los archivos listos para ser desplegados.

## Desarrollo y Modificaciones

Para modificar este generador:

*   El código principal de la UI y la lógica se encuentra en `App.tsx`.
*   La estructura de archivos generada y sus contenidos se definen en `services/generationService.ts` y `constants/fileTemplates.ts`.

---

🚀 [Ver Demo](https://mercedesdf.github.io/SASS-7-1-Structure-Generator/)

Creado por [mercedev](https://github.com/mercedev)
