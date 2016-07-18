var debug = require('debug')('jsaturday::require');

module.exports = function(folderArray){

  if(!folderArray)
    folderArray = [];

  // Normalize string to arrray
  if(!Array.isArray(folderArray) && typeof folderArray === 'string')
    folderArray = [folderArray];

  if(!Array.isArray(folderArray)){
    throw new Error('Argument must be string or array');
  }

  return function(moduleName){
    var module;

    for(var i = 0; i < folderArray.length; i++){
      var folder = folderArray[i];

      try{
        module = require(folder + '/' + moduleName);
        return module;
      }catch(err){
        debug('debug', 'Not found ' + moduleName + ' in ' + folder);
      }
    }

    module = require(moduleName);
    return moduleName;
  };

};