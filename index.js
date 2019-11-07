/* eslint-env node */
'use strict';

var fs = require('fs');
var path = require('path');

module.exports = {
  name: 'ember-modal-dialog',
  config: function (env, baseConfig) {
    console.log('[ember-modal-dialog]');
    return { hasEmberTether: "1.0.0" }
  }

};
