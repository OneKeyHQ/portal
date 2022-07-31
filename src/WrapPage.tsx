import { FC, useEffect } from 'react';

import { navigate, withPrefix } from 'gatsby';
import {
  LANGUAGE_KEY,
  PageContext,
} from 'gatsby-plugin-react-i18next/dist/types';
import { Helmet } from 'react-helmet';

import { Awwwards } from './components/common';
import { isBrowser } from './utils';

interface WrapPageProps {
  children: React.ReactNode;
  pageContext: PageContext;
  location: Location;
}

const removePathPrefix = (pathname: string, stripTrailingSlash: boolean) => {
  const pathPrefix = withPrefix('/');
  let result = pathname;

  if (pathname.startsWith(pathPrefix)) {
    result = pathname.replace(pathPrefix, '/');
  }

  if (stripTrailingSlash && result.endsWith('/')) {
    return result.slice(0, -1);
  }

  return result;
};

const WrapPage: FC<WrapPageProps> = (props) => {
  const { children, pageContext, location } = props;
  const { defaultLanguage, routed, language } = pageContext.i18n;

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (isBrowser()) {
      const { search } = location;

      let detected =
        window.localStorage.getItem(LANGUAGE_KEY) || defaultLanguage;

      if (routed) {
        detected = language;
      }

      window.localStorage.setItem(LANGUAGE_KEY, detected);

      if (detected !== defaultLanguage && !routed) {
        const queryParams = search || '';
        const stripTrailingSlash = false;

        const newUrl = withPrefix(
          `/${detected}${removePathPrefix(
            location.pathname,
            stripTrailingSlash,
          )}${queryParams}${location.hash}`,
        );

        // no way
        setTimeout(() => {
          navigate(newUrl);
        }, 200);
      }
    }

    return () => {};
  }, [defaultLanguage, language, location, routed]);

  return (
    <div>
      <Helmet
        htmlAttributes={{ lang: pageContext.language }}
        titleTemplate="OneKey Wallet | %s"
        defaultTitle="OneKey Wallet | All-in-one crypto wallet trusted by millions."
      >
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YL0P6QCC0D"
        />
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YL0P6QCC0D');
          `}
        </script>
      </Helmet>

      {children}

      <Awwwards />
    </div>
  );
};

export default WrapPage;
