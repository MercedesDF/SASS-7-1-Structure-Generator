export const MAIN_JS_CONTENT = `
import './sass/main.scss';

console.log('SASS 7-1 structure inicializado. Estilos cargados desde src/sass/main.scss. Abre index.html para ver una página de prueba.');
`;

export const GENERATED_INDEX_HTML_CONTENT = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SASS 7-1 Structure Test</title>
    <meta name="description" content="Test page for the generated SASS 7-1 structure.">
    <!-- El archivo main.js se importará de main.scss -->
    <script type="module" src="/src/main.js"></script>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; line-height: 1.6; margin: 0; background-color: #f4f7f6; color: #333; padding: 20px; }
        .container { max-width: 800px; margin: 30px auto; padding: 25px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        h1 { color: #1a237e; margin-bottom: 0.75em; font-size: 2em; }
        h2 { color: #283593; margin-top: 1.5em; margin-bottom: 0.5em; font-size: 1.5em; border-bottom: 1px solid #e0e0e0; padding-bottom: 0.3em;}
        p { margin-bottom: 1em; color: #424242;}
        ul { padding-left: 20px; margin-bottom: 1em;}
        li { margin-bottom: 0.5em; }
        code { background-color: #e8eaf6; padding: 0.2em 0.4em; border-radius: 4px; font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; color: #3f51b5; }
        .footer-note { font-size: 0.85em; color: #757575; margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 15px; }
        .styled-by-sass {
            border: 2px dashed #3949ab; /* Indigo */
            padding: 15px;
            margin-top: 20px;
            background-color: #e8eaf6; /* Lighter Indigo */
            border-radius: 6px;
        }
        .styled-by-sass p { margin-bottom: 0.5em;}
    </style>
</head>
<body>
    <div class="container">
        <h1>Página de Prueba de la Estructura SASS 7-1</h1>
        <p>Esta página está incluida en la estructura del proyecto SASS 7-1 que has generado para ayudarte a probar tu configuración local.</p>
        <p>Enlaza a <code>/src/main.js</code>, que a su vez importa <code>./sass/main.scss</code> desde el directorio <code>src</code>.</p>
        <p>Si has seguido las instrucciones de configuración en <code>README.md</code> (instalando Vite y SASS, y ejecutando <code>npm run dev</code> o <code>yarn dev</code>), esta página debería ser servida por Vite. Cualquier estilo global o estilo de prueba que agregues a tus archivos SASS debería aplicarse aquí.</p>

        <div class="styled-by-sass">
            <p><strong>Esta caja es para probar la integración de SASS.</strong></p>
            <p>Intenta agregar una regla simple a <code>src/sass/base/_typography.scss</code>, por ejemplo:</p>
            <p><code>body { background-color: #e0f7fa; }</code></p>
            <p>Guarda el archivo y verifica si esta página se actualiza automáticamente (Hot Module Replacement a través de Vite)!</p>
        </div>

        <h2>Próximos Pasos:</h2>
        <ul>
            <li>Explora el directorio <code>src/sass</code> y comienza a personalizar los parciales SASS (por ejemplo, <code>src/sass/abstracts/_variables.scss</code>). Muchos parciales ahora importan automáticamente variables para facilitar su uso.</li>
            <li>Consulta <code>README.md</code> para obtener explicaciones detalladas sobre la arquitectura SASS 7-1 y cómo utilizarla.</li>
            <li>¡Comienza a construir los componentes y diseños de tu proyecto!</li>
        </ul>
        <p class="footer-note">Este <code>index.html</code> es para fines de desarrollo y prueba local. Es probable que reemplaces su contenido con la estructura HTML real de tu proyecto a medida que construyes tu aplicación.</p>
    </div>
</body>
</html>
`;

export const LICENSE_TEMPLATE = `MIT License

Copyright (c) {YEAR} {COPYRIGHT_HOLDER}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this generated SASS 7-1 structure and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

**Note:** This license is generated with the current year and the placeholder "{COPYRIGHT_HOLDER}".
Please replace "{COPYRIGHT_HOLDER}" with your specific company or personal details.
`;

export const README_ES_MD_CONTENT = `
# Estructura de Proyecto SASS 7-1 BEM

Esta estructura de proyecto se genera siguiendo el patrón SASS 7-1, proporcionando una arquitectura escalable y mantenible para tus hojas de estilo. Incluye una configuración básica de Vite, una página HTML de prueba y una Licencia MIT para el boilerplate.

## Estructura de Directorios

- \`index.html\`: Una página HTML básica para pruebas locales con Vite. Enlaza a \`src/main.js\`.
- \`LICENSE\`: El archivo de Licencia MIT para esta estructura de boilerplate. El año se establece automáticamente al año actual.
- \`README.md\`: Este archivo.
- \`vite.config.js\`: Archivo básico de configuración de Vite.
- \`src/\`: Contiene el código fuente principal.
  - \`main.js\`: Punto de entrada JavaScript, ubicado en \`src/main.js\`. Importa \`./sass/main.scss\`.
  - \`sass/\`: Contiene todos los parciales SASS y el archivo SASS principal (\`src/sass/main.scss\`).
    - \`main.scss\`: El archivo SASS principal (\`src/sass/main.scss\`) que importa todas las demás partes. Es importado por \`src/main.js\`.
    - \`_index.scss\`: Ubicado en \`src/sass/_index.scss\`, agrega los 7 directorios de nivel superior usando \`@forward\`.
    - \`abstracts/\`: (\`src/sass/abstracts/\`) Herramientas y ayudantes SASS (variables, funciones, mixins).
      - \`_index.scss\`: Reenvía variables, mixins, funciones, etc.
      - \`_variables.scss\`: Define variables SASS globales.
      - \`_mixins.scss\`: Define mixins SASS globales.
      - \`_functions.scss\`: Define funciones SASS globales.
    - \`base/\`: (\`src/sass/base/\`) Estilos boilerplate (reset, tipografía, estilos base para elementos HTML). Los parciales aquí ahora incluyen automáticamente \`@use "../abstracts" as *;\`.
      - \`_index.scss\`: Reenvía estilos base.
      - \`_reset.scss\`: Marcador de posición para reglas de reseteo CSS.
      - \`_typography.scss\`: Marcador de posición para estilos de tipografía base.
      - \`_base.scss\`: Marcador de posición para estilos base de elementos HTML.
    - \`components/\`: (\`src/sass/components/\`) Estilos para componentes de UI individuales. Los parciales aquí ahora incluyen automáticamente \`@use "../abstracts" as *;\`.
      - \`_index.scss\`: Reenvía estilos de componentes.
      - \`_button.scss\`: Marcador de posición para estilos del componente botón.
      - \`_modal.scss\`: Marcador de posición para estilos del componente modal.
      - \`_sun.scss\`: Marcador de posición para estilos del componente sol.
      - \`_moon.scss\`: Marcador de posición para estilos del componente luna.
    - \`layout/\`: (\`src/sass/layout/\`) Estilos para partes estructurales del sitio. Los parciales aquí ahora incluyen automáticamente \`@use "../abstracts" as *;\`.
      - \`_index.scss\`: Reenvía estilos de layout.
      - \`_header.scss\`: Marcador de posición para estilos del encabezado.
      - \`_footer.scss\`: Marcador de posición para estilos del pie de página.
      - \`_grid.scss\`: Marcador de posición para estilos del sistema de rejilla.
    - \`pages/\`: (\`src/sass/pages/\`) Estilos específicos para páginas individuales. Los parciales aquí ahora incluyen automáticamente \`@use "../abstracts" as *;\`.
      - \`_index.scss\`: Reenvía estilos específicos de página.
      - \`_home.scss\`: Marcador de posición para estilos de la página de inicio.
    - \`themes/\`: (\`src/sass/themes/\`) Estilos para diferentes temas. Los parciales aquí ahora incluyen automáticamente \`@use "../abstracts" as *;\`.
      - \`_index.scss\`: Reenvía estilos de temas.
      - \`_spring.scss\`: Marcador de posición para el tema de primavera.
      - \`_summer.scss\`: Marcador de posición para el tema de verano.
      - \`_autumn.scss\`: Marcador de posición para el tema de otoño.
      - \`_winter.scss\`: Marcador de posición para el tema de invierno.
    - \`vendors/\`: (\`src/sass/vendors/\`) Estilos de bibliotecas o frameworks de terceros.
      - \`_index.scss\`: Reenvía estilos de vendors (si los hay).

## Configuración y Uso con Vite (en Linux/Ubuntu como ejemplo)

Esta estructura está lista para usarse con [Vite](https://vitejs.dev/), un rápido empaquetador y servidor de desarrollo.

1.  **Requisitos Previos (Ubuntu/Linux):**
    *   Asegúrate de tener Node.js y npm (o yarn) instalados.
    *   Git (para manejo de versiones).

2.  **Inicializar Proyecto (si es necesario).**

3.  **Instalar Dependencias:**
    Instala Vite y SASS como dependencias de desarrollo:
    \`\`\`bash
    npm install --save-dev vite sass
    # o
    yarn add --dev vite sass
    \`\`\`

4.  **Scripts en \`package.json\`:**
    Asegúrate de que tu archivo \`package.json\` incluya los siguientes scripts para Vite:
    \`\`\`json
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
    }
    \`\`\`
    Este generador ya incluye un \`vite.config.js\` básico.

5.  **Archivo \`src/main.js\`:**
    El archivo \`src/main.js\` ya está configurado para importar \`./sass/main.scss\`.

6.  **Archivo \`index.html\`:**
    Un archivo \`index.html\` de ejemplo se incluye en la raíz. Este archivo enlaza a \`src/main.js\` y te permite probar tus estilos.

7.  **Iniciar Servidor de Desarrollo:**
    Ejecuta el siguiente comando en tu terminal desde la raíz del proyecto:
    \`\`\`bash
    npm run dev
    # o
    yarn dev
    \`\`\`
    Vite iniciará un servidor de desarrollo (generalmente en \`http://localhost:5173\`).

8.  **Desarrollo:**
    Comienza a editar tus archivos SASS dentro del directorio \`src/sass/\`. Vite aplicará los cambios instantáneamente en el navegador.

## Uso con Otros Frameworks (Concepto General)

*   **Integración:** Generalmente, importarás el archivo \`src/sass/main.scss\` (o su versión compilada CSS) en el punto de entrada principal de tu aplicación.
    *   **Con React (usando Vite):** Vite ya maneja la importación de SASS. Simplemente importa \`src/main.js\` o directamente \`src/sass/main.scss\` en tu componente raíz de React (e.g., \`App.jsx\` o \`main.jsx\`).
        \`\`\`javascript
        // En tu main.jsx o App.jsx (asegúrate que la ruta relativa a src/main.js sea correcta)
        import './src/main.js'; // Ajusta la ruta si es necesario, ej: '../src/main.js'
        // o directamente (asegúrate que la ruta relativa a src/sass/main.scss sea correcta):
        // import './src/sass/main.scss'; // Ajusta la ruta si es necesario
        \`\`\`
    *   **Con otros compiladores/empaquetadores:** Deberás configurar el cargador de SASS correspondiente.
*   **Alcance de Estilos:** Los estilos en \`base/\`, \`layout/\`, y \`themes/\` suelen ser globales. Los estilos en \`components/\` se aplican a componentes específicos, y los de \`pages/\` a vistas particulares.

## Autor del Generador

Este Generador de Estructura SASS 7-1 fue creado por **mercedev**.
Si tienes preguntas sobre el generador en sí:
-   **Email:** [mercedev@mercedev.es](mailto:mercedev@mercedev.es)

## Licencia del Código Generado

El código boilerplate generado se proporciona bajo la Licencia MIT.
Revisa el archivo \`LICENSE\` y reemplaza \`"{COPYRIGHT_HOLDER}"\` con tu nombre o el de tu empresa.

¡Feliz codificación y diseño!
`;

export const VITE_CONFIG_JS_CONTENT = `
import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react'; // Descomentar si se usa React.

export default defineConfig({
  // plugins: [react()], // Descomentar si se usa React.
  server: {
    // open: true, // Abrir automáticamente la aplicación en el navegador al iniciar el servidor
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Puedes agregar importaciones SASS globales aquí si es necesario,
        // aunque el patrón 7-1 generalmente maneja esto a través de @use y @forward.
        // ejemplo: additionalData: \\\`@use "./src/sass/abstracts/variables" as *;\\\`
        // Nota: Muchos parciales ahora incluyen automáticamente este tipo de importación.
      }
    }
  }
});
`;

export const SCSS_MAIN_SCSS_CONTENT = `
// Este es el archivo SASS principal que será importado por tu JavaScript (src/main.js).
// Se encuentra en src/sass/main.scss.
// Utiliza el archivo _index.scss en el mismo directorio (src/sass/_index.scss) para cargar toda la estructura 7-1.
@use "index" as *;

// Puedes agregar estilos globales aquí si es absolutamente necesario,
// pero generalmente es mejor mantenerlos dentro de la estructura 7-1.
// Por ejemplo, para probar, intenta descomentar:
// body {
//   background-color: lightcoral; // Ejemplo usando un color nombrado
// }

// Para usar variables de _variables.scss, asegúrate de que estén definidas allí
// y luego úsalas. Por ejemplo, si $primary-color está definido:
// body {
//   // Si _variables.scss se reenvía sin un espacio de nombres por abstracts/_index.scss (en src/sass/abstracts/)
//   // y abstracts/_index.scss se reenvía por _index.scss (en src/sass/):
//   color: $primary-color;
// }
`;

export const SCSS_INDEX_SCSS_CONTENT = `
// Agrega todos los 7 directorios principales del patrón 7-1.
// Se encuentra en src/sass/_index.scss
@forward "abstracts";
@forward "base";
@forward "components";
@forward "layout";
@forward "pages";
@forward "themes";
@forward "vendors";
`;

export const SCSS_ABSTRACTS_INDEX_SCSS_CONTENT = `
// Reenvía todas las herramientas y helpers de SASS.
// Se encuentra en src/sass/abstracts/_index.scss
// Por defecto, los miembros de los módulos reenviados están disponibles sin un espacio de nombres.
@forward "variables";
@forward "mixins";
@forward "functions";
`;

export const SCSS_ABSTRACTS_VARIABLES_SCSS_CONTENT = `
// SCSS Variables
// Se encuentra en src/sass/abstracts/_variables.scss
// Define tus variables SASS globales aquí.
// Ejemplos:
// $primary-color: #007bff;
// $secondary-color: #6c757d;
// $background-color: #f8f9fa;
// $text-color: #212529;

// $font-family-base: 'Arial', sans-serif;
// $font-size-base: 1rem; // Típicamente 16px

// $breakpoint-sm: 576px;
// $breakpoint-md: 768px;
// $breakpoint-lg: 992px;
// $breakpoint-xl: 1200px;

// Initial test variable
$test-variable-color: #ff00ff; // Magenta, para fácil identificación
`;

export const SCSS_ABSTRACTS_MIXINS_SCSS_CONTENT = `
// SCSS Mixins
// Se encuentra en src/sass/abstracts/_mixins.scss
// Define tus mixins SASS globales aquí.

// Ejemplo de Mixin de Breakpoint (usando min-width para un enfoque móvil primero)
// @mixin breakpoint($point) {
//   @if $point == sm { // Pantallas pequeñas (por ejemplo, teléfonos)
//     @media (min-width: 576px) { @content; }
//   } @else if $point == md { // Pantallas medianas (por ejemplo, tabletas)
//     @media (min-width: 768px) { @content; }
//   } @else if $point == lg { // Pantallas grandes (por ejemplo, escritorios)
//     @media (min-width: 992px) { @content; }
//   } @else if $point == xl { // Pantallas extra grandes (por ejemplo, escritorios grandes)
//     @media (min-width: 1200px) { @content; }
//   } @else {
//     @warn "Breakpoint '#{$point}' not recognized. Available: sm, md, lg, xl.";
//   }
// }

// Ejemplo: Clearfix
// @mixin clearfix {
//   &::after {
//     content: "";
//     display: table;
//     clear: both;
//   }
// }
`;

export const SCSS_ABSTRACTS_FUNCTIONS_SCSS_CONTENT = `
// SCSS Functions
// Se encuentra en src/sass/abstracts/_functions.scss
// Define tus funciones SASS globales aquí.
// Ejemplo:
// @function rem($pixels, $context: 16px) {
//   @return ($pixels / $context) * 1rem;
// }
`;

export const SCSS_BASE_INDEX_SCSS_CONTENT = `
// Forwards base SASS partials.
// Se encuentra en src/sass/base/_index.scss
@forward "reset";
@forward "typography";
@forward "base";
`;

export const SCSS_BASE_BASE_SCSS_CONTENT = `// Importar abstracts para un acceso fácil.
// Se encuentra en src/sass/base/_base.scss
@use "../abstracts" as *;

// Estilo de elementos base.
// Estilos para elementos HTML como body, a, etc.
// Ejemplo:
// body {
//   font-family: $font-family-base;
//   font-size: $font-size-base;
//   line-height: 1.5;
//   color: $text-color;
//   background-color: $background-color;
// }
`;

export const SCSS_COMPONENTS_INDEX_SCSS_CONTENT = `
// Reenvía los parciales SASS para componentes individuales.
// Ubicado en src/sass/components/_index.scss
@forward "button";
@forward "modal";
`;

export const SCSS_COMPONENTS_MODAL_SCSS_CONTENT = `// Importar abstracts para un acceso fácil.
// Ubicado en src/sass/components/_modal.scss
@use "../abstracts" as *;

// Component: Modal
// Styles for modal dialogs.
// .modal {
//   // styles...
// }
`;

export const SCSS_LAYOUT_INDEX_SCSS_CONTENT = `
// Reenvía los parciales SASS para elementos de diseño.
// Ubicado en src/sass/layout/_index.scss
@forward "grid";
@forward "header";
@forward "footer";
`;

export const SCSS_LAYOUT_FOOTER_SCSS_CONTENT = `// Importar abstracts para un acceso fácil
// Ubicado en src/sass/layout/_footer.scss
@use "../abstracts" as *;

// Layout: Footer
// Styles for the site footer.
// .site-footer {
//   // styles...
// }
`;

export const SCSS_PAGES_INDEX_SCSS_CONTENT = `
// Reenvía los parciales SASS para estilos específicos de página.
// Ubicado en src/sass/pages/_index.scss
@forward "home";
// @forward "contact";
`;

export const SCSS_THEMES_INDEX_SCSS_CONTENT = `
// Reenvía los parciales SASS para temas.
// Ubicado en src/sass/themes/_index.scss
@forward "spring";
@forward "summer";
@forward "autumn";
@forward "winter";
`;

export const SCSS_THEMES_SPRING_SCSS_CONTENT = `// Importar abstracts para un acceso fácil
// Ubicado en src/sass/themes/_spring.scss
@use "../abstracts" as *;

// Theme: Spring
// Styles for the spring theme.
// .theme-spring {
//   // styles...
// }
`;
export const SCSS_THEMES_SUMMER_SCSS_CONTENT = `// Importar abstracts para un acceso fácil
// Ubicado en src/sass/themes/_summer.scss
@use "../abstracts" as *;

// Theme: Summer
// Styles for the summer theme.
// .theme-summer {
//   // styles...
// }
`;
export const SCSS_THEMES_AUTUMN_SCSS_CONTENT = `// Importar abstracts para un acceso fácil
// Ubicado en src/sass/themes/_autumn.scss
@use "../abstracts" as *;

// Theme: Autumn
// Styles for the autumn theme.
// .theme-autumn {
//   // styles...
// }
`;
export const SCSS_THEMES_WINTER_SCSS_CONTENT = `// Importar abstracts para un acceso fácil
// Ubicado en src/sass/themes/_winter.scss
@use "../abstracts" as *;

// Theme: Winter
// Styles for the winter theme.
// .theme-winter {
//   // styles...
// }
`;

export const SCSS_VENDORS_INDEX_SCSS_CONTENT = `
// Reenvía los parciales SASS para estilos de proveedores (si los hay).
// Ubicado en src/sass/vendors/_index.scss
// Ejemplo:
// @forward "normalize";
// @forward "some-other-vendor-library";
`;

export const LISTA_DE_MODIFICACIONES_MD_CONTENT = `
# Lista de Modificaciones y Puntos a Configurar (para el Desarrollador del Generador)

Este archivo te ayudará a recordar los elementos que debes configurar o personalizar en el código fuente de **esta herramienta generadora (SASS 7-1 Structure Generator)** si planeas bifurcarla, alojarla o modificarla tú mismo/a. **Este archivo NO se incluye en el ZIP generado para el usuario final.**

## 1. Archivo \`LICENSE\` (del proyecto generado)

-   **Acción Requerida (para el usuario final):** Reemplazar el marcador de posición del titular de los derechos de autor.
-   **Ubicación (en el ZIP generado):** Raíz del proyecto (\`LICENSE\`)
-   **Detalle:** El archivo \`LICENSE\` generado para el usuario final incluye \`[YOUR COMPANY/NAME HERE]\`. El usuario final debe modificarlo. (Esto es solo un recordatorio del comportamiento).

## 2. Archivo \`README.md\` (del proyecto generado)

-   **Acción Requerida (para el usuario final):** Revisar y personalizar el contenido.
-   **Ubicación (en el ZIP generado):** Raíz del proyecto (\`README.md\`)
-   **Detalles (para el usuario final):**
    *   Adaptar la descripción del proyecto, información de autor/contacto, y enlaces.
    *   El \`README.md\` generado tiene una sección "Autor del Generador" que menciona a "mercedev" como creador del *generador*; el usuario final puede ajustarlo para *su proyecto específico*.

## 3. Variables SASS Globales (del proyecto generado)

-   **Acción Requerida (para el usuario final):** Definir las variables de su proyecto.
-   **Ubicación (en el ZIP generado):** \`src/sass/abstracts/_variables.scss\`
-   **Detalle:** El usuario final deberá modificar las variables de ejemplo para que se ajusten al diseño de su proyecto.

## 4. Contenido HTML de Prueba (\`index.html\` del proyecto generado)

-   **Acción Requerida (para el usuario final):** Reemplazar con el HTML de su aplicación.
-   **Ubicación (en el ZIP generado):** Raíz del proyecto (\`index.html\`)

## 5. Comentarios y Contenido de Ejemplo en Archivos SASS (del proyecto generado)

-   **Acción Requerida (para el usuario final):** Revisar y adaptar/eliminar.
-   **Ubicación (en el ZIP generado):** Varios archivos dentro de \`src/sass/\`.

## 6. Configuración del Generador (Si estás modificando ESTA herramienta)

Estos son los puntos a revisar en el código fuente del **propio generador** (principalmente en \`src/App.tsx\` y \`src/metadata.json\`) si lo has clonado y planeas desplegar tu propia versión:

-   **Metadatos de la Aplicación (\`metadata.json\` del generador):**
    *   **\`name\`**: Actualmente "SASS 7-1 Structure Generator". Puedes cambiarlo si lo deseas.
    *   **\`description\`**: Modifica la descripción si cambias significativamente la funcionalidad o el enfoque del generador.

-   **Constantes de URL en \`App.tsx\` (del generador):**
    *   **\`GITHUB_REPO_URL\`**: Actualmente es \`https://github.com/MercedesDF/SASS-7-1-Structure-Generator\`. Actualízalo al repositorio de tu versión bifurcada del generador si lo publicas.
    *   **\`LINKEDIN_URL\`**: Actualmente es \`https://www.linkedin.com/in/mercedesdf-ingenieria/\`. Actualízalo a tu perfil de LinkedIn si lo deseas.
    *   **Nota sobre "Deployed App URL"**: El enlace y el icono para la "aplicación desplegada" (\`DEPLOYED_APP_URL\`) han sido eliminados de la interfaz de usuario por defecto para simplificarla. Si deseas reintroducir esta funcionalidad en tu versión, deberás añadir de nuevo el icono y el enlace en \`App.tsx\`.

-   **Textos de la Interfaz de Usuario en \`App.tsx\` (del generador):**
    *   **Título Principal (\`<h1>\`)**: Actualmente "SASS 7-1 Structure Generator".
    *   **Subtítulos y otros textos descriptivos**: Están en español. Puedes traducirlos o modificarlos según tus necesidades.
    *   **Información de Pie de Página**: El pie de página ha sido simplificado a solo "© 2025". Si deseas añadir tu propia atribución, información de contacto o enlaces adicionales en el pie de página de tu versión del generador, deberás modificar la sección \`<footer>\` en \`App.tsx\`.

-   **Estilos y Diseño (\`App.tsx\` y Tailwind CSS):**
    *   Puedes personalizar la apariencia del generador modificando las clases de Tailwind CSS en \`App.tsx\`.

¡Mucha suerte con tu versión del generador!
`;
// Marcador de posición para el antiguo README_MD_CONTENT si es necesario por otras partes de la aplicación, de lo contrario se puede eliminar.
// Para este cambio, lo estamos reemplazando con README_ES_MD_CONTENT para la generación.
export const README_MD_CONTENT = `Este es un marcador de posición para el antiguo README en inglés. El generador ahora utiliza README_ES_MD_CONTENT.`;
