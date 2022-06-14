import { FC } from 'react';

import { Helmet } from 'react-helmet';

import { isBrowser } from '../../../utils';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  twitterUsername?: string;
  isArticle?: boolean;
}

export const SEO: FC<SEOProps> = (props) => {
  const {
    title = 'OneKey Wallet | All-in-one crypto wallet trusted by millions.',
    description = 'The best way to keep crypto assets safe in the industry. Your bitcoin, ethereum, solana, and other crypto assets can all be safe and secure.',
    keywords = 'hardware wallet, defi, nft, btc, eth, near, fantom, solana, algo, starcoin, metamask, glow, trezor, ledger, safepal, keystone, imtoken, tokenpocket, rainbow wallet',
    image = `https://portal.onekey.so/og/og.jpg`,
    url = isBrowser() ? window.location.href : '',
    twitterUsername = 'OneKeyHQ',
    isArticle = false,
  } = props;

  const seo = {
    title,
    description,
    keywords,
    image,
    url,
  };

  return (
    <Helmet>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />

      {image && <meta name="image" content={seo.image} />}
      {image && <meta name="twitter:image:src" content={seo.image} />}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {isArticle && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={`@${twitterUsername}`} />
      )}
      {twitterUsername && (
        <meta name="twitter:site" content={`@${twitterUsername}`} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};
