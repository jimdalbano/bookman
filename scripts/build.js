'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', err => {
  throw err;
});


require('../config/env');

const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const webpack = require('webpack');

const config = require('../config/webpack.config.dev');
const paths = require('../config/paths');

const useYarn = fs.existsSync(paths.yarnLockFile);

function build() {
  console.log('Creating an optimized production build...');

  let previousFileSizes = 100;

  let compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }

      const messages = stats.compilation;

      if (messages.errors.length) {
        return reject(new Error(messages.errors.join('\n\n')));
      }
      return resolve({
        stats,
        previousFileSizes,
        warnings: messages.warnings,
      });
    });
  });
}

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml,
  });
}

function copyChromeFolder() {
  fs.copySync(paths.appChrome, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml,
  });
}

fs.emptyDirSync(paths.appBuild);
copyPublicFolder();
copyChromeFolder();

build()
  .then(
    ({ stats, previousFileSizes, warnings }) => {
      if (warnings.length) {
        console.log(chalk.yellow('Compiled with warnings.\n'));
        console.log(warnings.join('\n\n'));
      } else {
        console.log(chalk.green('Compiled successfully.\n'));
      }
    },
    err => {
      console.log(chalk.red('Failed to compile.\n'));
      console.log((err.message || err) + '\n');
      process.exit(1);
    }
  );


