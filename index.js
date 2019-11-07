/* eslint-env node */
'use strict';

var fs = require('fs');
var path = require('path');

module.exports = {
  name: require('./package').name,
  config: function (env, baseConfig) {
    var configPath = path.join(this.root, 'config', 'environment.js');
    
    if (fs.existsSync(configPath)) {
      var configGenerator = require(configPath);
      const result = configGenerator(env, baseConfig, this);
      
      console.log(result['ember-modal-dialog']);
      return result;
    }
  }

};
