exports.onCreateWebpackConfig = ({ getConfig, actions, loaders }) => {
  const { setWebpackConfig } = actions;
  const existingConfig = getConfig();

  existingConfig.module.rules.map((rule) => {
    if (
      String(rule.test) ===
      String(/\.(ico|svg|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/)
    ) {
      rule.test = /\.(ico|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/;
    }

    return rule;
  });

  const urlLoader = loaders.url({ name: 'static/[name].[hash:8].[ext]' });

  const svgrLoader = {
    loader: '@svgr/webpack',
    options: {
      dimensions: false,
    },
  };

  setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: [svgrLoader, urlLoader],
        },
      ],
    },
  });
};
