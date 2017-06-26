'use strict';

// Registers the runtime to be able to read the Roc context
require('roc/runtime/register');

const context = require('roc/lib/context/helpers/manageContext').getContext();
module.exports = Object.keys(context.dependencies.exports);
