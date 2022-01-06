const assetPrefix = process.env.NODE_ENV === 'production' ? '/number-eveil' : '';

module.exports = {
  assetPrefix,
  publicRuntimeConfig: {
    assetPrefix,
  },
};
