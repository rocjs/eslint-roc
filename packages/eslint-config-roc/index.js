'use strict';

const path = require('path');

const coreModules = require('./core-modules');

module.exports = {
  settings: {
    'import/resolver': require.resolve('eslint-import-resolver-roc'),
    // Uses core-modules here to make eslint-plugin-import not complain about dependencies
    // missing from package.json (no-extraneous-dependencies)
    // This actually makes none of the exports go through the resolver, meaning that the
    // resolver is not that needed but we will keep it if someones overrides "import/core-modules"
    // in their project. When doing this one would either need to disable no-extraneous-dependencies
    // or manually add the core-modules as we do here (exposed for convicinance in core-modules.js).
    //
    // https://github.com/benmosher/eslint-plugin-import/issues/479
    'import/core-modules': coreModules
  }
};
