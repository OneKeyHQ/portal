import pathBrowserify from 'path-browserify';

export function staticAssetPrefix(path: string): string {
  const publicUrl =
    process.env.PUBLIC_URL || process.env.GATSBY_PUBLIC_URL || '';
  const newUrl = pathBrowserify.join(publicUrl, path);

  return newUrl;
}
