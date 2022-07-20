import { FC, useEffect } from 'react';

import { Helmet } from 'react-helmet';

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
  }, [path]);

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
    </div>
  );
};

export default WrapPage;
