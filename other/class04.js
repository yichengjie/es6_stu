'use strict'
class MyClass {
    //类的实例属性可以用等式，写入类的定义之中。
    //es7提案中才有的，所以需要babel的转译
    myProp = 42 ;
    constructor(){
        console.info(this.myProp) ;
    }
}


let c = new MyClass() ;
