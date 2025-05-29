
# Diagrama de Flujo de la Aplicación: SASS 7-1 Structure Generator

Este documento describe el flujo lógico de la aplicación "SASS 7-1 Structure Generator" mediante un diagrama textual y una explicación detallada.

## Componentes Principales Involucrados:

*   **`App.tsx`**: Componente principal de React, maneja la UI y la orquestación.
*   **`generationService.ts`**: Servicio para definir la estructura de archivos y su contenido.
*   **`zipService.ts`**: Servicio para crear y descargar el archivo ZIP.
*   **`constants/fileTemplates.ts`**: Almacena el contenido base de los archivos.
*   **Usuario**: Entidad que interactúa con la aplicación.

## Diagrama de Flujo Textual (Formato Mermaid):

```mermaid
graph TD
    A[Usuario: Abre la aplicación web] --> B{UI Renderizada (App.tsx)};
    B --> C{Usuario: Clic en "Generar y Descargar ZIP"};

    C --> D[App.tsx: Inicia handleGenerateAndDownload()];
    D --> E[App.tsx: Establece isGenerating = true (UI actualiza: botón deshabilitado, texto "Generando...")];
    E --> F[App.tsx: Limpia errores previos (error = null)];

    F --> G[App.tsx: Llama a generationService.generateSassStructure()];
    G --> H[generationService:];
    H --> H1[Lee plantillas desde fileTemplates.ts];
    H1 --> H2[Procesa plantillas (ej: año en LICENSE)];
    H2 --> H3[Construye array de OutputFile (path, content)];
    H3 --> I[generationService: Retorna array de OutputFile];

    I --> J[App.tsx: Recibe array de OutputFile];
    J --> K[App.tsx: Llama a zipService.createZipAndDownload(files, nombreZip)];
    K --> L[zipService:];
    L --> L1[Crea instancia de JSZip];
    L1 --> L2[Itera y añade cada OutputFile a JSZip];
    L2 --> L3[Genera Blob del ZIP (asíncrono)];
    L3 --> L4[Usa FileSaver.saveAs() para iniciar descarga];
    L4 --> M{zipService: ¿Éxito en generación/descarga?};

    M -- Éxito --> N[App.tsx: Descarga del ZIP iniciada en el navegador];
    N --> O[App.tsx: Establece isGenerating = false (UI actualiza: botón habilitado)];
    O --> P[FIN DEL PROCESO (Éxito)];

    M -- Fallo --> Q[App.tsx: Captura el error];
    Q --> R[App.tsx: Establece estado 'error' con mensaje (UI muestra alerta)];
    R --> S[App.tsx: Establece isGenerating = false (UI actualiza: botón habilitado)];
    S --> T[FIN DEL PROCESO (Error)];

    subgraph generationService [Servicio de Generación]
        direction LR
        H1
        H2
        H3
    end

    subgraph zipService [Servicio de ZIP]
        direction LR
        L1
        L2
        L3
        L4
    end
```

## Explicación del Diagrama:

1.  **Inicio (A, B, C):**
    *   `A`: El usuario accede a la aplicación web.
    *   `B`: La interfaz de usuario (UI) principal, gestionada por `App.tsx`, se renderiza en el navegador.
    *   `C`: El usuario interactúa con la UI haciendo clic en el botón "Generar y Descargar ZIP".

2.  **Manejo de la Acción en `App.tsx` (D, E, F):**
    *   `D`: Se invoca la función `handleGenerateAndDownload` dentro de `App.tsx`.
    *   `E`: El estado `isGenerating` se establece a `true`. Esto actualiza la UI para indicar que el proceso está en curso (por ejemplo, deshabilitando el botón y mostrando un mensaje como "Generando...").
    *   `F`: Cualquier mensaje de error previo (`error`) se limpia (se establece a `null`).

3.  **Generación de la Estructura de Archivos (G, H, I):**
    *   `G`: `App.tsx` llama a la función `generateSassStructure()` del `generationService.ts`.
    *   `H`: `generationService` se encarga de:
        *   `H1`: Leer las plantillas de contenido de los archivos desde `constants/fileTemplates.ts`.
        *   `H2`: Procesar estas plantillas si es necesario (por ejemplo, reemplazar el marcador de año `{YEAR}` en la licencia).
        *   `H3`: Construir un array de objetos `OutputFile`. Cada objeto en este array representa un archivo que se incluirá en el ZIP, conteniendo su `path` (ruta dentro del ZIP) y su `content` (contenido del archivo).
    *   `I`: `generationService` retorna este array de `OutputFile` a `App.tsx`.

4.  **Creación y Descarga del Archivo ZIP (J, K, L, M):**
    *   `J`: `App.tsx` recibe el array de `OutputFile`.
    *   `K`: `App.tsx` llama a la función `createZipAndDownload()` del `zipService.ts`, pasándole el array de archivos y el nombre deseado para el archivo ZIP.
    *   `L`: `zipService` realiza las siguientes acciones:
        *   `L1`: Crea una nueva instancia de la librería `JSZip`.
        *   `L2`: Itera sobre el array de `OutputFile` y añade cada archivo (con su ruta y contenido) al objeto JSZip.
        *   `L3`: Genera el contenido del archivo ZIP como un `Blob`. Esta es una operación asíncrona.
        *   `L4`: Utiliza la función `saveAs` de la librería `FileSaver.js` para solicitar al navegador que descargue el `Blob` (el archivo ZIP).
    *   `M`: Se verifica si el proceso de generación y descarga del ZIP fue exitoso.

5.  **Resultado del Proceso (N-T):**
    *   **Si tiene Éxito (N, O, P):**
        *   `N`: La descarga del archivo ZIP se inicia en el navegador del usuario.
        *   `O`: El estado `isGenerating` en `App.tsx` se restablece a `false`. La UI se actualiza para reflejar que el proceso ha terminado (por ejemplo, habilitando el botón nuevamente).
        *   `P`: El flujo del proceso concluye exitosamente.
    *   **Si Falla (Q, R, S, T):**
        *   `Q`: Si ocurre un error durante la generación del ZIP o su descarga, es capturado por `App.tsx`.
        *   `R`: El estado `error` en `App.tsx` se actualiza con un mensaje descriptivo del error. La UI muestra una alerta o notificación al usuario.
        *   `S`: El estado `isGenerating` en `App.tsx` se restablece a `false`.
        *   `T`: El flujo del proceso concluye, pero indicando que ha ocurrido un error.

Este diagrama y su explicación detallan el flujo de control y datos a través de los diferentes módulos y servicios de la aplicación "SASS 7-1 Structure Generator".
