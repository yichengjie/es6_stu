'use strict'
var readFile = require('readFile-promise.js') ;

var asyncReadFile = async function (){
  var f1 = await readFile('./g1.js');
  var f2 = await readFile('./g2.js');
  console.log(f1.toString());
  console.log(f2.toString());
};

var result = asyncReadFile();