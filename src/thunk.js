'use strict' ;
var fs = require('fs');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);

function run(fn) {
  var gen = fn();
  function next(err, data) {
    var result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }
  next();
}

var g = function* (){
  var f1 = yield readFile('g1.js');
  console.info('----------------------------------------------') ;
  console.info(f1.toString()) ;
  var f2 = yield readFile('g2.js');
  console.info('----------------------------------------------') ;
  console.info(f2.toString()) ;
  // ...
  var fn = yield readFile('g3.js');
  console.info('----------------------------------------------') ;
  console.info(fn.toString()) ;
};

// function* g() {
//   let a = yield 2;
//   let b = yield 3 ;
// }

run(g);