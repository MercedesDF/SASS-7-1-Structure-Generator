
import JSZip from 'jszip';
import saveAs from 'file-saver'; // Cambio de { saveAs }
import type { OutputFile } from '../types';

export const createZipAndDownload = async (files: OutputFile[], zipFileName: string): Promise<void> => {
  const zip = new JSZip();

  files.forEach(file => {
    zip.file(file.path, file.content);
  });

  try {
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    saveAs(zipBlob, zipFileName); 
  } catch (error) {
    console.error('Error generating or saving ZIP file:', error);
    throw new Error('Failed to create ZIP file. See console for details.');
  }
};