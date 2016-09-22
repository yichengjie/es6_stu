'use strict'
function fn1(){
    var target = function () { return 'I am the target'; };
    var handler = {
    apply: function () {
        return 'I am the proxy';
    }
    };
    var p = new Proxy(target, handler);
    let str = p()
    console.info(str) ;
    // "I am the proxy
}

function fn2(){
    var twice = {
        apply (target, ctx, args) {
            console.info(args) ;
            //console.info(...arguments) ;
            //这段或则下面
            //return Reflect.apply(...arguments) * 2;
            //或则下面的代码
            return Reflect.apply(target, ctx, args) * 2;
        }
    };
    function sum (left, right) {
        return left + right;
    };
    var proxy = new Proxy(sum, twice);
    console.info(proxy(1, 2)) // 6
    console.info(proxy.call(null, 5, 6)) // 22
    console.info(proxy.apply(null, [7, 8])) // 30
    console.info(Reflect.apply(proxy, null, [9, 10])) // 38
}


function fn3 (){
    var handler = {
        has (target, key) {
            if (key[0] === '_') {
            return false;
            }
            return key in target;
        }
    };
    var target = { _prop: 'foo', prop: 'foo' };
    var proxy = new Proxy(target, handler);
    let flag = '_prop' in proxy // false
    console.info(flag) ;
}

fn1() ;
console.info('---------------------------') ;
fn2() ;
console.info('---------------------------') ;
fn3() ;