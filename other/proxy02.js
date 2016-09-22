'use strict'
//var Reflect = require('harmony-reflect');
//import 'babel-polyfill';

function fn1(){
    var handler = {
      get: function(target, name) {
        if (name === 'prototype') {
          return Object.prototype;
        }
        return 'Hello, ' + name;
      },

      apply: function(target, thisBinding, args) {
        return args[0];
      },

      construct: function(target, args) {
        return {value: args[1]};
      }
    };

    var fproxy = new Proxy(function(x, y) {
      return x + y;
    }, handler);

    let str1  = fproxy(1, 2) // 1
    let str2 = new fproxy(1,2) // {value: 2}
    let str3 = fproxy.prototype === Object.prototype // true
    let str4 = fproxy.foo // Hello, foo

    console.info("str1 : " ,str1 ) ;
    console.info("str2 : " ,str2 ) ;
    console.info("str3 : " ,str3 ) ;
    console.info("str4 : " ,str4 ) ;
}

(function (){
  fn1() ;
})() ;
