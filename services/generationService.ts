
import type { OutputFile } from '../types';
import {
  MAIN_JS_CONTENT,
  README_ES_MD_CONTENT, // Use Spanish README
  VITE_CONFIG_JS_CONTENT,
  SCSS_MAIN_SCSS_CONTENT,
  SCSS_INDEX_SCSS_CONTENT,
  SCSS_ABSTRACTS_INDEX_SCSS_CONTENT,
  SCSS_ABSTRACTS_VARIABLES_SCSS_CONTENT,
  SCSS_ABSTRACTS_MIXINS_SCSS_CONTENT,
  SCSS_ABSTRACTS_FUNCTIONS_SCSS_CONTENT, // New
  SCSS_BASE_INDEX_SCSS_CONTENT,
  SCSS_BASE_BASE_SCSS_CONTENT, // New
  SCSS_COMPONENTS_INDEX_SCSS_CONTENT,
  SCSS_COMPONENTS_MODAL_SCSS_CONTENT, // New
  SCSS_COMPONENTS_SUN_SCSS_CONTENT, // New
  SCSS_COMPONENTS_MOON_SCSS_CONTENT, // New
  SCSS_LAYOUT_INDEX_SCSS_CONTENT,
  SCSS_LAYOUT_FOOTER_SCSS_CONTENT, // New
  SCSS_PAGES_INDEX_SCSS_CONTENT,
  SCSS_THEMES_INDEX_SCSS_CONTENT,
  SCSS_THEMES_SPRING_SCSS_CONTENT, // New
  SCSS_THEMES_SUMMER_SCSS_CONTENT, // New
  SCSS_THEMES_AUTUMN_SCSS_CONTENT, // New
  SCSS_THEMES_WINTER_SCSS_CONTENT, // New
  SCSS_VENDORS_INDEX_SCSS_CONTENT,
  LICENSE_TEMPLATE,
  GENERATED_INDEX_HTML_CONTENT
} from '../constants/fileTemplates';

const IMPORT_ABSTRACTS_LINE = '// Import abstracts for easy access\n@use "../abstracts" as *;\n\n';

export const generateSassStructure = (): OutputFile[] => {
  const currentYear = new Date().getFullYear();
  const holder = "[YOUR COMPANY/NAME HERE]"; // Always use placeholder

  const licenseContent = LICENSE_TEMPLATE
    .replace(/{YEAR}/g, currentYear.toString())
    .replace(/{COPYRIGHT_HOLDER}/g, holder);

  const files: OutputFile[] = [
    // Root files
    { path: 'index.html', content: GENERATED_INDEX_HTML_CONTENT },
    { path: 'LICENSE', content: licenseContent },
    { path: 'README.md', content: README_ES_MD_CONTENT }, // Use Spanish README
    { path: 'vite.config.js', content: VITE_CONFIG_JS_CONTENT },

    // src directory
    { path: 'src/main.js', content: MAIN_JS_CONTENT },

    // src/sass directory root
    { path: 'src/sass/main.scss', content: SCSS_MAIN_SCSS_CONTENT },
    { path: 'src/sass/_index.scss', content: SCSS_INDEX_SCSS_CONTENT },

    // src/sass/abstracts
    { path: 'src/sass/abstracts/_index.scss', content: SCSS_ABSTRACTS_INDEX_SCSS_CONTENT },
    { path: 'src/sass/abstracts/_variables.scss', content: SCSS_ABSTRACTS_VARIABLES_SCSS_CONTENT },
    { path: 'src/sass/abstracts/_mixins.scss', content: SCSS_ABSTRACTS_MIXINS_SCSS_CONTENT },
    { path: 'src/sass/abstracts/_functions.scss', content: SCSS_ABSTRACTS_FUNCTIONS_SCSS_CONTENT },

    // src/sass/base
    { path: 'src/sass/base/_index.scss', content: SCSS_BASE_INDEX_SCSS_CONTENT },
    { path: 'src/sass/base/_reset.scss', content: `${IMPORT_ABSTRACTS_LINE}// Base Reset Styles\n// Add your CSS reset rules or import a reset library here.\n// Example: body, h1, p { margin: 0; padding: 0; box-sizing: border-box; }\n` },
    { path: 'src/sass/base/_typography.scss', content: `${IMPORT_ABSTRACTS_LINE}// Base Typography Styles\n// Define default styles for text elements.\n// Example: body { font-family: $font-family-base; color: $text-color; }\n` },
    { path: 'src/sass/base/_base.scss', content: SCSS_BASE_BASE_SCSS_CONTENT },

    // src/sass/components
    { path: 'src/sass/components/_index.scss', content: SCSS_COMPONENTS_INDEX_SCSS_CONTENT },
    { path: 'src/sass/components/_button.scss', content: `${IMPORT_ABSTRACTS_LINE}// Component: Button\n// Styles for button elements.\n// .button {\n//   // styles...\n// }\n` },
    { path: 'src/sass/components/_modal.scss', content: SCSS_COMPONENTS_MODAL_SCSS_CONTENT },
    { path: 'src/sass/components/_sun.scss', content: SCSS_COMPONENTS_SUN_SCSS_CONTENT },
    { path: 'src/sass/components/_moon.scss', content: SCSS_COMPONENTS_MOON_SCSS_CONTENT },

    // src/sass/layout
    { path: 'src/sass/layout/_index.scss', content: SCSS_LAYOUT_INDEX_SCSS_CONTENT },
    { path: 'src/sass/layout/_grid.scss', content: `${IMPORT_ABSTRACTS_LINE}// Layout: Grid System\n// Styles for your grid system.\n// .container {\n//   // styles...\n// }\n` },
    { path: 'src/sass/layout/_header.scss', content: `${IMPORT_ABSTRACTS_LINE}// Layout: Header\n// Styles for the site header.\n// .site-header {\n//   // styles...\n// }\n` },
    { path: 'src/sass/layout/_footer.scss', content: SCSS_LAYOUT_FOOTER_SCSS_CONTENT },

    // src/sass/pages
    { path: 'src/sass/pages/_index.scss', content: SCSS_PAGES_INDEX_SCSS_CONTENT },
    { path: 'src/sass/pages/_home.scss', content: `${IMPORT_ABSTRACTS_LINE}// Page: Home\n// Styles specific to the homepage.\n// .home-page {\n//   // styles...\n// }\n` },

    // src/sass/themes
    { path: 'src/sass/themes/_index.scss', content: SCSS_THEMES_INDEX_SCSS_CONTENT },
    { path: 'src/sass/themes/_spring.scss', content: SCSS_THEMES_SPRING_SCSS_CONTENT },
    { path: 'src/sass/themes/_summer.scss', content: SCSS_THEMES_SUMMER_SCSS_CONTENT },
    { path: 'src/sass/themes/_autumn.scss', content: SCSS_THEMES_AUTUMN_SCSS_CONTENT },
    { path: 'src/sass/themes/_winter.scss', content: SCSS_THEMES_WINTER_SCSS_CONTENT },

    // src/sass/vendors
    { path: 'src/sass/vendors/_index.scss', content: SCSS_VENDORS_INDEX_SCSS_CONTENT },
    // No default _normalize.scss in this new structure, user can add if needed.
  ];

  return files;
};
