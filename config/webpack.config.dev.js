'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');

const paths = require('./paths');

const publicPath = '/';
const nodeModules = path.resolve(path.join(__dirname, 'node_modules'));

/* ====================================================================

    CSS pipeline loader configs

    Need 2 different css-loader configs - one with modules; one w/out.
    Lets us use css modules w/in the app and but not in 3rd party libs
    (bootstrap, etc).
*/
const cssLoaderPlain = {
  loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
    modules: false,
  },
};

const cssLoaderModules = {
  loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
    modules: true,
    localIdentName: "[name]__[local]__[hash:base64:5]",
  },
};

const postcssLoader = {
  loader: require.resolve('postcss-loader'),
  options: {
    sourceMap: true,
    plugins: function() {
      return [
        require('postcss-cssnext'),
      ];
    },
  },
};

const sassLoader = {
  loader: require.resolve('sass-loader'),
  options: {
    sourceMap: true,
    includePaths: [ 'node_modules' ],
  },
};

/* ==================================================================== */


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
      paths.appNodeModules
    ],
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
          /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        ],
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },

      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader')
      },

      {
        test: /\.(eot|woff|woff2|ttf|otf|svg|png|jpg)$/,
        loader: require.resolve('url-loader'),
        options: {
          limit: 20000,
          name: 'fonts/[name].[hash:8].[ext]',
        },
      },

      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader')
      },

      // Gives us a way to use external (s)css libs without css-module-ication
      {
        test: [
          /global\.scss$/,
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            cssLoaderPlain,
            postcssLoader,
            sassLoader,
          ],
        }),
      },

      // Application styles to be css-module-ified
      {
        test: [/\.scss$/, /\.css$/],
        exclude: [
          /global\.scss$/,
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            cssLoaderModules,
            postcssLoader,
            sassLoader,
          ],
        }),
      },
    ]
  },

  plugins: [
    new StyleLintPlugin({
      syntax: 'scss',
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  ]
};
