/* eslint-env node */
'use strict';

var fs = require('fs');
var path = require('path');

module.exports = {
  name: require('./package').name,
  config: function (env, baseConfig) {
    var configPath = path.join(this.root, 'config', 'environment.js');
    
    if (fs.existsSync(configPath)) {
      console.log('exists: ', configPath)
      var configGenerator = require(configPath);
      console.log('AND we got a GENERATOR yall!')
      try { 
        const result = configGenerator(env, baseConfig, this);      
        console.log('ember-modal-dialog attrs: ', result['ember-modal-dialog']);
        return result;
      } catch(e) {
        console.log("error = ", e)
        throw e;      
      }
    }
  }

};
