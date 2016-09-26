'use strict'
class A{
    constructor(p){
        this._p = p ;
    }
    get m (){
        return this._p ;
    }
    set m (val){
        throw new Error('该属性只读!') ;
    }
}

let a = new A('123') ;
console.info(a.m) ;
console.info(a._p) ;
a.m = 'sdf';


