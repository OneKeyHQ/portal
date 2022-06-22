import pathBrowserify from 'path-browserify';

export function staticAssetPrefix(path: string): string {
  console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL);

  const publicUrl = process.env.PUBLIC_URL || '';
  const newUrl = pathBrowserify.join(publicUrl, path);

  return newUrl;
}
