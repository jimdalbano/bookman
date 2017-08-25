'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appPopupJs: resolveApp('src/scenes/popup/popup.js'),
  appListJs: resolveApp('src/scenes/full/list.js'),
  appBuild:   resolveApp('build'),
  appPublic:   resolveApp('public'),
  appChrome:   resolveApp('chrome'),
  appSrc:     resolveApp('src'),
  appNodeModules: resolveApp('node_modules'),
  appPackageJson: resolveApp('package.json'),
};

