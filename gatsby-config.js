module.exports = {
  siteMetadata: {
    siteUrl: 'https://portal.onekey.so',
    title: 'onekey',
    description: 'onekey',
    url: 'url',
    image: 'image',
    twitterUsername: 'twitterUsername',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-i18n-simple',
      options: {
        locales: ['en', 'zh'],
        defaultLocale: 'en',
        redirect: false,
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
          breakpoints: [414, 960, 1200, 1440, 1920],
          placeholder: "blurred",
          backgroundColor: `transparent`,
        },
      }
    },
    `gatsby-plugin-less`
  ],
}
