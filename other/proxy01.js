'use strict'
//var Reflect = require('harmony-reflect');
//import 'babel-polyfill';

function fn1 (){
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
}

function fn2 (){
  var proxy = new Proxy({}, {
    get: function(target, property) {
      console.info('property : ' , property) ;
      return 35;
    }
  });
  console.info(proxy.time) // 35
  console.info(proxy.name) // 35
  console.info(proxy.title) // 35
}

function fn3 (){
  //Proxy实例也可以作为其他对象的原型对象。
  //obj对象本身并没有time属性，所以根据原型链，
  //会在proxy对象上读取该属性，导致被拦截。
  var proxy = new Proxy({}, {
    get: function(target, property) {
      return 99;
    }
  });
  let obj = Object.create(proxy);
  obj.name ="yicj" ;
  console.info(obj.time) // 35
  console.info(obj.name) ;//yicj
}


function fnx(){
  let i = 0 ;
  //++i,返回值为加后的值
  console.info(++i) ;
  //i++,返回值为加之前的值
  console.info(i++) ;
  console.info('i : ' + i) ;
}


(function (){
  fn1() ;
  console.info('-----------------------------') ;
  fn2() ;
  console.info('-----------------------------') ;
  fn3() ;
  console.info('-----------------------------') ;
  fnx() ;
})() ;
