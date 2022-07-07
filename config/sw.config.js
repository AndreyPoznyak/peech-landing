module.exports = {
  swDest: 'docs/service-worker.js',
  globPatterns: [
    'assets/**.css',
    '**.html',
    '**/**.html',
    'assets/images/**.*',
    'assets/**.js',
  ],
  modifyURLPrefix: {
    'docs/': '',
  },
  runtimeCaching: [{
    urlPattern: '/',
    handler: 'NetworkFirst',
  }],
  globDirectory: 'docs',
};
