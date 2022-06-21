export function staticAssetPrefix(path: string) {
  return `${process.env.PUBLIC_URL || ''}${path}`;
}
