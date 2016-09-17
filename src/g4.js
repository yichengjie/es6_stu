'use strict'
//自动执行完promise包装的g
let readFile = require('./readFile-promise.js') ;
var gen = function* (){
  var f1 = yield readFile('./g1.js');
  var f2 = yield readFile('./g2.js');
  console.log(f1.toString());
  console.info('-------------------------------------------') ;
  console.log(f2.toString());
};


function run(gen){
  var g = gen();
  //递归调用next直到执行完毕
  function next(data){
    var result = g.next(data);
    if (result.done) return result.value;
    result.value.then(function(data){
      next(data);
    });
  }
  next();
}


run(gen);