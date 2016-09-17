'use strict' ;
var fs = require('fs');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);

module.exports = readFile ;