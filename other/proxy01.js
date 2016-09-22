'use strict'
//var Reflect = require('harmony-reflect');
//import 'babel-polyfill';

var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});

obj.count = 1
//  setting count!
++obj.count
//  getting count!
//  setting count!
//  2
let i = 0 ;
//++i,返回值为加后的值
console.info(++i) ;
//i++,返回值为加之前的值
console.info(i++) ;

console.info('i : ' + i) ;