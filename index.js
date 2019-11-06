/* eslint-env node */
'use strict';

var fs = require('fs');
var path = require('path');

module.exports = {
  name: require('./package').name,
  config: function (env, baseConfig) {
    var configPath = path.join(this.root, 'config', 'environment.js');
    console.log('configPath = ', configPath);

    if (fs.existsSync(configPath)) {
      var configGenerator = require(configPath);

      console.log('found configPath = ', configPath);
      return configGenerator(env, baseConfig, this);
    }
  }

};
