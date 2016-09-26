'use strict'

class A{}

class B extends A{

}
let flag1 = (B.__proto__ === A) ;
let flag2 = (B.prototype.__proto__ === A.prototype) ;

console.info('flag1 : ' + flag1) ;
console.info('flag2 : ' + flag2) ;

class C extends Object{

}

C.__proto__ === Object // true
C.prototype.__proto__ === Object.prototype // true

class D {

}

D.__proto__ ===Function.prototype ;
D.prototype.__proto__ === Object.prototype ;