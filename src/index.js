import JSZip from 'jszip';

export async function unzip(binary) {
  const zip = new JSZip();
  const files = await zip.loadAsync(binary);
  return files;
}
