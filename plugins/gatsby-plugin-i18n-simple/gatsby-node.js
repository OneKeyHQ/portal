exports.onCreatePage = async ({ page, actions }, pluginOptions) => {
  if (typeof page.context.intl === 'object') {
    return;
  }
  const { createPage, deletePage } = actions;
  const {
    locales = ['en'],
    defaultLocale = 'en',
    redirect = false,
  } = pluginOptions;

  const generatePage = (routed, language) => {
    const isI18nPage = page.path.includes(`/${language}/`);
    const newPath =
      routed || isI18nPage ? `/${language}${page.path}` : page.path;
    const serverData = {};

    if (page.context?.i18nData) {
      Object.keys(page.context.i18nData).forEach((key) => {
        serverData[key] = page.context.i18nData[key][language];
      });
    }

    return {
      ...page,
      path: newPath,
      context: {
        ...page.context,
        serverData,
        language,
        intl: {
          language,
          locales,
          routed,
          originalPath: page.path,
          redirect,
          defaultLocale,
        },
      },
    };
  };

  const newPage = generatePage(false, defaultLocale);
  deletePage(page);
  createPage(newPage);

  locales.forEach((language) => {
    const localePage = generatePage(true, language);
    const regexp = /\/404\/?$/;
    if (regexp.test(localePage.path)) {
      localePage.matchPath = `/${language}/*`;
    }
    createPage(localePage);
  });
};
