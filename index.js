/**
 * Created by yicj on 2016/3/25.
 */
"use strict"
function testLet(){
    for(let i = 0 ; i < 10 ;i++){

    }
    console.info(i) ;
}

function testVar(){
    for(var i = 0 ; i < 10 ;i++){
    }
    console.info(i) ;
}
//testLet() ;
//testVar() ;

function testVar2(){
    var a = [] ;
    for(var i = 0 ; i < 10 ;i ++){
        a[i] = function(){
            console.info(i) ;
        }
    }
    a[6]() ;
}

//testVar2() ;
function testLet2(){
    var a = [] ;
    for(let i = 0 ; i < 10 ; i++){
        a[i] = function () {
            console.info(i) ;
        }
    }
    a[6]() ;
}
//testLet2() ;
//
function test3(){
    var tmp = 123 ;
    if(true){
        //tmp = 'abc' ;
        console.info(tmp) ;
        let tmp ;
    }
}

//test3() ;
var tmp = new Date() ;
function test4(){
    console.info(tmp) ;
    if(false){
        var tmp = "hello world" ;
    }
}

//test4() ;


{
    let  a = 11 ;
    console.info(a) ;
}

{
    let a = 'secret' ;
    function f(){
        return a ;
    }
}
//f() ;

/*{

    var [a, b, c] = [1, 2, 3];
    console.info(a) ;
    console.info(b) ;
    console.info(c) ;

}*/

function aaa(){
    var s = 'hello';

    for (var i = 0; i < s.length; i++) {
        console.log(s[i]);
    }

    console.log('********** > ' + i); // 5
}

aaa() ;



