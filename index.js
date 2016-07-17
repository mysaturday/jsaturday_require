var debug = require('debug')('jSaturday::require');

module.exports = function(settings){

  var customFolder = settings.customFolder || 'Custom';
  var baseDir = settings.baseDir || __dirname;

  return function(moduleName){
    var module;
    try{
      module = require(baseDir + '/' + customFolder + '/' + moduleName);
      return module;
    }catch(err){
      debug('info', 'Not found custom ' + baseDir + '/' + customFolder + '/' + moduleName);
    }

    debug('info', 'Searching in default path for ' + moduleName);

    module = require(moduleName);
    return moduleName;
  }

}