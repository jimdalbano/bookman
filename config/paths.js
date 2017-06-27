'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


module.exports = {
  appIndexJs: resolveApp('src/index.js'),
  appPopupJs: resolveApp('src/popup.js'),
  appBuild:   resolveApp('build'),
  appPublic:   resolveApp('public'),
  appChrome:   resolveApp('chrome'),
  appSrc:     resolveApp('src'),
  appNodeModules: resolveApp('node_modules'),
  appPackageJson: resolveApp('package.json')
};
