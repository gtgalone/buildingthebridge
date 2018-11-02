const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')

module.exports = withTypescript(
  withCSS({
    webpack(config) {
      if (process.env.ANALYZE) {
        config.plugins.push(new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        }))
      }
      return config
    },
    cssModules: true,
    serverRuntimeConfig: { // Will only be available on the server side
    },
    publicRuntimeConfig: { // Will be available on both server and client
      SITE_NAME: 'Building the Bridge',
      SITE_TITLE: 'Building the Bridge - Syracuse Refugee Assistant Center',
      SITE_DESCRIPTION: 'We are a team of people in many different fields pursuing one goal. Our goal is to transform the darkest street in Syracuse into the brightest street. We strive to remove the walls that stand between generation to generation, people to people, country to country and build a single unified community in Love.',
      SITE_IMAGE: '/static/main-logo.png',
    }
  })
)
