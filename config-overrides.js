const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox
} = require('customize-cra');
const path = require("path");

module.exports = override(
  // Enable legacy decorators babel plugin
  addDecoratorsLegacy(),

  // Disable eslint in webpack
  disableEsLint(),

  // Add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
  process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),

  // Add an alias imports
  addWebpackAlias({
    "@layouts": path.resolve(__dirname, "./src/layouts"),
    "@pages": path.resolve(__dirname, "./src/pages"),
    "@utils": path.resolve(__dirname, "./src/utils"),
    "@constants": path.resolve(__dirname, "./src/constants"),
    "@services": path.resolve(__dirname, "./src/services"),
    "@classes": path.resolve(__dirname, "./src/classes"),
    "@types": path.resolve(__dirname, "./src/types"),
    "@styles": path.resolve(__dirname, "./src/styles"),
    "@components": path.resolve(__dirname, "./src/components")
  }),

  // adjust the underlying workbox
  adjustWorkbox(wb =>
    Object.assign(wb, {
      skipWaiting: true,
      exclude: (wb.exclude || []).concat("index.html")
    })
  )
);