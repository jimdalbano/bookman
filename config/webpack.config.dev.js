'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const path = require('path');
const webpack = require('webpack');

const env = require('./env');
const paths = require('./paths');

const publicPath = '/';

const StyleLintPlugin = require('stylelint-webpack-plugin');

// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const extractSass = new ExtractTextPlugin({
    // filename: "[name].[contenthash].css",
    // // disable: process.env.NODE_ENV === "development"
// });

const nodeModules = path.resolve(path.join(__dirname, 'node_modules'));

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    popup: paths.appPopupJs,
    list: paths.appListJs,
  },
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: '[name].js',
    publicPath: publicPath,
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath)
  },

  resolve: {
    modules: [
        paths.appSrc,
        'node_modules',
        paths.appNodeModules
      ].concat(
        process.env.NODE_PATH.split(path.delimeter).filter(Boolean)
    ),
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    strictExportPresence: true,  // what is this?
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: require.resolve('eslint-loader'),
        options: {
          failOnWarning: false
        },

        include: paths.appSrc
      },

      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
          /\.scss$/,
          /\.sass$/,
        ],
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },

      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        include: [
          paths.appSrc,
          path.join(nodeModules, 'bootstrap-sass'),
        ],
        use: require.resolve('url-loader'),
      },

      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },

      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader')
      },

      // "postcss" loader applies autoprefixer to our CSS.
      // "css" loader resolves paths in CSS and adds assets as dependencies.
      // "style" loader turns CSS into JS modules that inject <style> tags.
      // In production, we use a plugin to extract that CSS to a file, but
      // in development "style" loader enables hot editing of CSS.
      {
        test: [/\.css$/, /\.scss$/, /\.sass$/],
        include: [
          paths.appSrc,
          path.join(nodeModules, 'bootstrap-sass'),
        ],
        use: [
          {
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options,
              sourceMap: true,
            },
          },
          {
            loader: require.resolve('sass-loader'),
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ]
  },

  plugins: [
    new StyleLintPlugin({
      syntax: 'scss',
    }),
  ]
};
