/* eslint-env node */
'use strict';

var fs = require('fs');
var path = require('path');

module.exports = {
  name: 'ember-modal-dialog',
  config: function (env, baseConfig) {
    console.log('[ember-modal-dialog]');
    
    var configPath = path.join(this.root, 'config', 'environment.js');
    console.log('[ember-modal-dialog] configPath = ', configPath);
    
    if (fs.existsSync(configPath)) {
      console.log('[ember-modal-dialog] configPath exists');
      var configGenerator = require(configPath);
      console.log('[ember-modal-dialog] configPath generated');
      try { 
        const result = configGenerator(env, baseConfig, this);      
        console.log('[ember-modal-dialog] result = ', result['ember-modal-dialog']);
        return result;
      } catch(e) {
        console.log("error = ", e)
        throw e;      
      }
    }
  }

};
