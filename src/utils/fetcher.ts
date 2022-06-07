import camelcaseKeys from 'camelcase-keys';

export async function fetcher<T>(
  input: RequestInfo,
  init?: RequestInit | undefined,
) {
  const res = await fetch(input, init);

  const json = await res.json();

  const formattedData = camelcaseKeys(json, {
    deep: true,
  });

  return formattedData as Promise<T>;
}
