'use strict';

if (typeof Promise === 'undefined') {
  require('promise/lib/rejection-tracting').enable();
  window.Promis = require('promise/lib/es6-extensions.js');
}

require('whatwg-fetch');

Object.assign = require('object-assign');
