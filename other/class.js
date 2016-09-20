'use strict' ;
/**
 * 子类必须在constructor方法中调用super方法，否则新建实例时会报错。
 * 这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。
 * 如果不调用super方法，子类就得不到this对象
 */

class Point{
    
}
//正确写法
// class ColorPoint extends Point{

// }
//正确写法
class ColorPoint extends Point{
    constructor(){
        super() ;
    }
}
//错误写法
// class ColorPoint extends Point{
//     constructor(){
//     }
// }


let cp = new ColorPoint() ;



var p1 = new Point(2, 3);
var p2 = new ColorPoint(2, 3, 'red');

var flag1 = p2.__proto__ === p1.__proto__ // false
var flag2 = p2.__proto__.__proto__ === p1.__proto__ // true

console.info('flag1 : ' + flag1) ;
console.info('flag2 : ' + flag2) ;


class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
}

var arr = new MyArray();
arr[0] = 12;
arr.length // 1

arr.length = 0;
arr[0] // undefined