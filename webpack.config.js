const CopyPlugin = require("copy-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: "./public/index.js",
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: "./public/index.html",
            to: `${__dirname}/dist/index.html`,
          },
          {
            from: "./public/styles.css",
            to: `${__dirname}/dist/styles.css`,
          },
        ],
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new HtmlMinimizerPlugin(),
        new CssMinimizerPlugin(),
        new TerserPlugin(),
      ],
    },
    output: {
      path: `${__dirname}/dist`,
      filename: "bundle.js",
    },
    mode: "production",
    module: {},
}