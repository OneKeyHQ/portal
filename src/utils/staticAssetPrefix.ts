import pathBrowserify from 'path-browserify';

export function staticAssetPrefix(path: string): string {
  const publicUrl = PUBLIC_URL || '';
  const newUrl = pathBrowserify.join(publicUrl, path);

  return newUrl;
}
