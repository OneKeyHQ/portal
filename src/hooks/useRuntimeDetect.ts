import { detect } from 'detect-browser';

export function useRuntimeDetect() {
  const browser = detect();

  return {
    isIOS: browser?.os === 'iOS',
    isAndroid: browser?.os === 'Android OS' || browser?.os === 'android',
    isMobilePhone:
      browser?.os === 'iOS' ||
      browser?.os === 'Android OS' ||
      browser?.os === 'android',
    isFirefox: browser?.name === 'firefox',
    os: browser?.os,
  };
}
