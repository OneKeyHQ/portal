import urlJoin from 'url-join';

export function staticAssetPrefix(path: string): string {
  const publicUrl = PUBLIC_URL || '';
  const newUrl = urlJoin.join(publicUrl, path);

  return newUrl;
}
