
import React, { useState, useCallback } from 'react';
import { generateSassStructure } from './services/generationService';
import { createZipAndDownload } from './services/zipService';
import type { OutputFile } from './types';

// Icono de descarga original para ZIP.
const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
  </svg>
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.074 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

// ExternalLinkIcon ya no se utiliza en la interfaz de usuario por defecto
// const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
//   <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
//     <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5A.75.75 0 003.75 6v13.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V15a.75.75 0 00-1.5 0v4.5a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V6.75a.75.75 0 00-.75-.75z" clipRule="evenodd" />
//   </svg>
// );

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const APP_VERSION = "1.0.0";
const GITHUB_REPO_URL = "https://github.com/MercedesDF/SASS-7-1-Structure-Generator";
// const DEPLOYED_APP_URL = "https://mercedev.github.io/sass-7-1-generator/"; // Placeholder - Ícono eliminado de la interfaz de usuario.
const LINKEDIN_URL = "https://www.linkedin.com/in/mercedesdf-ingenieria/";

const App: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateAndDownload = useCallback(async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const files: OutputFile[] = generateSassStructure();
      await createZipAndDownload(files, 'sass-7-1-structure.zip');
    } catch (err) {
      console.error('Error al generar o descargar archivos:', err);
      setError(err instanceof Error ? err.message : 'Ocurrió un error desconocido.');
    } finally {
      setIsGenerating(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center px-6 pt-6 pb-12 selection:bg-sky-500 selection:text-sky-900">
      <div className="bg-slate-800 shadow-2xl rounded-xl p-8 md:p-12 w-full max-w-2xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-400 mb-3">
            SASS 7-1 Structure Generator
          </h1>
          <p className="text-sm text-slate-200 mt-2 italic opacity-70">Incluye configuración de Vite, README, Licencia y archivos SASS fundamentales.</p>
        </header>

        <main className="my-8">
          <button
            onClick={handleGenerateAndDownload}
            disabled={isGenerating}
            className="w-full max-w-xs mx-auto bg-sky-500 hover:bg-sky-600 disabled:bg-sky-800 disabled:text-sky-500 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75 flex items-center justify-center space-x-2"
            aria-label="Generar y Descargar archivo ZIP"
          >
            <DownloadIcon className="w-5 h-5" />
            <span>
              {isGenerating ? 'Generando...' : 'Generar y Descargar ZIP'}
            </span>
          </button>

          <div className="mt-6 text-center">
            <p className="text-base text-slate-200 mb-4">
              V {APP_VERSION}
            </p>
            <div className="flex justify-center space-x-6 mb-6"> {/* Espacio entre dos íconos. */}
              <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" aria-label="Ver el repositorio en GitHub" className="text-slate-200 hover:text-sky-400 transition-colors duration-200">
                <GitHubIcon className="w-6 h-6" />
              </a>
             
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Contactar en LinkedIn" className="text-slate-200 hover:text-sky-400 transition-colors duration-200">
                <LinkedInIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </main>

        {error && (
          <div role="alert" className="mt-6 p-4 bg-red-700 bg-opacity-50 text-red-300 border border-red-500 rounded-md">
            <p className="font-semibold">Error:</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        <footer className="mt-10 pt-6 border-t border-slate-700 text-center">
           <div className="text-xs text-slate-300"> 
         
            <p>© 2025</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
