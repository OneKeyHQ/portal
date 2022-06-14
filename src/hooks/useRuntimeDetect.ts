import { detect } from 'detect-browser';

export function useRuntimeDetect() {
  const browser = detect();

  return {
    isIOS: browser?.os === 'iOS',
    isAndroid: browser?.os === 'Android OS' || browser?.os === 'android',
  };
}
