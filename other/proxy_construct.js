'use strict'

function fn1 (){
    var p = new Proxy(function() {}, {
        construct: function(target, args) {
            console.log('called: ' + args.join(', '));
            return { value: args[0] * 10 };
        }
    });
    let str = new p(1) ;
    console.info(str) ;
    // "called: 1"
    // 10
}


function fn2 (){
   // construct方法返回的必须是一个对象，否则会报错。
   var p = new Proxy(function() {}, {
        construct: function(target, argumentsList) {
            return 1;
        }
    });
    new p() // 报错
}

function fn3 (){
    //defineProperty方法返回false，导致添加新属性会抛出错误。
    var handler = {
        defineProperty (target, key, descriptor) {
            return false;
        }
    };
    var target = {};
    var proxy = new Proxy(target, handler);
    proxy.foo = 'bar'
    // TypeError: proxy defineProperty handler returned false for property '"foo"'
}

function fn4(){
    var handler = {
        getOwnPropertyDescriptor (target, key) {
            if (key[0] === '_') {
            return;
            }
            return Object.getOwnPropertyDescriptor(target, key);
        }
    };
    var target = { _foo: 'bar', baz: 'tar' };
    var proxy = new Proxy(target, handler);
    console.info(Object.getOwnPropertyDescriptor(proxy, 'wat'))
    // undefined
    console.info(Object.getOwnPropertyDescriptor(proxy, '_foo'))
    // undefined
    console.info(Object.getOwnPropertyDescriptor(proxy, 'baz'))
    // { value: 'tar', writable: true, enumerable: true, configurable: true }
}


function fn5(){
    let target = {};
    let handler = {
        ownKeys(target) {
            return ['hello', 'world'];
        }
    };
    let proxy = new Proxy(target, handler);
    console.info(Object.keys(proxy)) ;
    // [ 'hello', 'world' ]
}

function fn6 (){
    let target = {};
    let handler = {};
    let {proxy, revoke} = Proxy.revocable(target, handler);
    proxy.foo = 123;
    console.info(proxy.foo) // 123

    revoke();
    console.info(proxy.foo) // TypeError: Revoked
}


//fn1() ;
console.info('-------------------------') ;
//fn2() ;
console.info('-------------------------') ;
//fn3() ;
console.info('-------------------------') ;
//fn4() ;
console.info('-------------------------') ;
//fn5() ;
console.info('-------------------------') ;
fn6() ;
