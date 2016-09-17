'use strict'
let readFile = require('./readFile-promise.js') ;
var co = require('co');
var gen = function* (){
  var f1 = yield readFile('./g1.js');
  var f2 = yield readFile('./g2.js');
  console.log(f1.toString());
  console.info('-------------------------------------------') ;
  console.log(f2.toString());
};

co(gen).then(function(){
    console.log('Generator 函数执行完成');
});