const withImages = require("next-images");
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([
  [withBundleAnalyzer],
  [withImages, {
    images: {
      domains: ['i.thatcopy.pw', 'media.graphcms.com'],
    }
  }]
]);
