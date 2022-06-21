import { useContext } from 'react';

import i18next from 'i18next';
import {
  I18nContext,
  useTranslation as useTranslationI18next,
} from 'react-i18next';

export function createI18next(lng: string) {
  const i18n = i18next.createInstance();

  i18n.init({
    lng,
    resources: {},
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
  });

  return i18n;
}

export function useI18n() {
  const { i18n } = useContext(I18nContext);

  return {
    ...i18n,
    isEnglish: i18n.language === 'en',
    isChinese: i18n.language === 'zh',
  };
}

export function useTranslation(
  resources: {
    [key: string]: {
      [key: string]: string;
    };
  } = { zh: {}, en: {} },
) {
  const ns = 'translation';
  const i18n = useI18n();

  i18n
    .addResources('zh', ns, resources.zh || {})
    .addResources('en', ns, resources.en || {});

  return useTranslationI18next(ns);
}