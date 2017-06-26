'use strict';

const path = require('path');
const resolver = require('roc').getResolveRequest('eslint-plugin-import-roc');

const resolve = require('resolve');

module.exports.interfaceVersion = 2;

module.exports.resolve = function eslintRocImportResolver(source, file) {
  const context = path.dirname(path.resolve(file));

  if (resolve.isCore(source)) {
    return { found: true, path: null };
  }

  try {
    return {
      found: true,
      path: resolve.sync(resolver(source, context), { basedir: context })
    };
  } catch (err) {
    /* ignore this error and try again instead with fallback enabled */
  }

  try {
    return {
      found: true,
      path: resolve.sync(resolver(source, context, true), { basedir: context })
    };
  } catch (err) {
    return { found: false };
  }
};
