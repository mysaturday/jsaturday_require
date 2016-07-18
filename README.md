# jSaturday_require

## State
Alpha

## Description
Extends the native **require** function of node, allowing you to specify a set of folders in which serarch for the module. These foders will be evaluated *before* the standard ones.

Can be useful in case the user decides to overwrite some of the modules installed in node_modules ( for example inside a "./*Custom*" or "*./Plugin*" folder) .

## Install
```sh
$ npm install -S jsaturday-require
```

## Test
```sh
$ npm test
```

## Usage
Initialize the object:
```node
var jSatRequire = require('jsaturday_require')(FOLDERS_ARRAY)
```
where *FOLDER_ARRAY* is an array of folders (in case of just one folder it could be a string).

Use instead of the normal *require()*:
```node
var module1 = jSatRequire('module1');
```

## Example
```node
var jSatRequire = require('jsaturday_require')([
    __dirname + '/Custom1',
    __dirname + '/Custom2',
    ]);
    
var module1 = jSatRequire('module1');
var module2 = jSatRequire('module1');
```

## Author
Francesco Sirocco