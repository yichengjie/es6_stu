/**
 * Created by yicj on 2016/6/26.
 */

'use strict' ;
function aaa1(){
    let s = Symbol();
    var t = typeof s ;
    console.info(t) ;
}

//aaa1() ;

function aaa2(){
    var s1 = Symbol('foo');
    var s2 = Symbol('bar');

    console.info(s1) // Symbol(foo)
    console.info(s2) // Symbol(bar)

    console.info(s1.toString()) // "Symbol(foo)"
    console.info(s2.toString()) // "Symbol(bar)"
}

//aaa2() ;
function aaa3(){
    // 没有参数的情况
    var s1 = Symbol();
    var s2 = Symbol();

    var t1 = (s1 === s2) // false

// 有参数的情况
    var s1 = Symbol("foo");
    var s2 = Symbol("foo");

    var t2 = (s1 === s2) // false

    console.info(t1,t2) ;
}

aaa3() ;