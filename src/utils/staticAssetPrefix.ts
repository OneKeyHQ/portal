import urlJoin from 'url-join';

export function staticAssetPrefix(path: string): string {
  const publicUrl = process.env.PUBLIC_URL || '';
  const newUrl = urlJoin(publicUrl, path);

  console.log(newUrl);

  return newUrl;
}
