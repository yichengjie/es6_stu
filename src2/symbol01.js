'use strict'

let s = Symbol() ;

let type = typeof s ;

console.info('type ', type) ;

var s1 = Symbol('foo') ;
var s2 = Symbol('bar') ;

console.info(s1) ;
console.info(s2) ;

console.info(s1.toString()) ;

var a = {} ;
var mySymbol = Symbol() ;
Object.defineProperty(a,mySymbol,{value:'helloworld'}) ;

console.info(a[mySymbol]) ;