import { FC, useEffect } from 'react';

import { Helmet } from 'react-helmet';
import { I18nextProvider } from 'react-i18next';

import { createI18next } from './i18n';

interface WrapPageProps {
  children: React.ReactNode;
  path: string;
  pageContext: {
    language: string;
    intl: any;
    isI18nPage: boolean;
  };
}

const WrapPage: FC<WrapPageProps> = (props) => {
  const { children, pageContext, path } = props;
  const i18n = createI18next(pageContext.language);
  const { intl } = pageContext;

  useEffect(() => {
    // const isI18nPage = path.includes(`/en/`) || path.includes(`/zh/`);

    // if (isBrowser() && !isI18nPage) {
    //   const { location } = window;
    //   const { search } = location;
    //   const detected = getPageLanguage();
    //   const {
    //     originalPath,
    //   }: {
    //     originalPath: string;
    //   } = intl;
    //   const queryParams = search || '';
    //   const newUrl = `${location.origin}/${detected}${originalPath}${queryParams}`;
    //   localStorage.setItem('language', detected);
    //   location.replace(newUrl);
    //   return;
    // }

    import('browser-update').then((bu) => {
      bu.default({
        test: false,
        reminder: 0,
        reminderClosed: 1,
        no_permanent_hide: true,
        required: {
          e: 16,
        },
        url: 'https://browser-update.org/zh/update.html',
        text: {
          msg: '本网站使用最新技术构建，为保证最佳浏览体验，请更新您的浏览器（{brow_name}）',
          msgmore: '',
          bupdate: '更新浏览器',
          bignore: '忽略提醒',
          remind: '将会在 {days} 天后提醒',
          bnever: '不再提示',
        },
      });
    });
  }, [intl, path]);

  return (
    <div>
      <Helmet
        htmlAttributes={{ lang: pageContext.language }}
        titleTemplate="%s"
      >
        <script
          src="https://jarvis-website.onekey.so/script.js"
          data-site="WWLGDZJB"
          data-spa="auto"
          defer
        />
      </Helmet>

      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </div>
  );
};

export default WrapPage;
