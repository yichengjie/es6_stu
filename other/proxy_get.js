'use strict'
function fn1(){
    var person = {
        name: "张三"
    };
    var proxy = new Proxy(person, {
        get: function(target, property) {
            if (property in target) {
                return target[property];
            } else {
                throw new ReferenceError(`Property "${property}" does not exist.`);
            }
        }
    });
    proxy.name // "张三"
    proxy.age // 抛出一个错误
}

function fn2(){
    //get方法可以继承。
    let proto = new Proxy({}, {
        get(target, propertyKey, receiver) {
            console.log('GET '+propertyKey);
            return target[propertyKey];
        }
    });
    let obj = Object.create(proto);
    console.info(obj.xxx) // "GET xxx"
    obj.yyy = "yyy" ; 
    console.info(obj.yyy) ;
}

function fn3 (){
    function createArray(...elements) {
        let handler = {
            get(target, propKey, receiver) {
                let index = Number(propKey);
                if (index < 0) {
                    propKey = String(target.length + index);
                }
                return Reflect.get(target, propKey, receiver);
            }
        };
        let target = [];
        target.push(...elements);
        return new Proxy(target, handler);
    }
    let arr = createArray('a', 'b', 'c');
    console.info(arr[-1]) // c
}

function fn4(){
    var handler = {
        get (target, key) {
            invariant(key, 'get');
            return target[key];
        },
        set (target, key, value) {
            invariant(key, 'set');
            return true;
        }
    };
    function invariant (key, action) {
        if (key[0] === '_') {
            throw new Error(`Invalid attempt to ${action} private "${key}" property`);
        }
    }
    var target = {};
    var proxy = new Proxy(target, handler);
    proxy._prop
    // Error: Invalid attempt to get private "_prop" property
    proxy._prop = 'c'
    // Error: Invalid attempt to set private "_prop" property
}


//fn1() ;
fn2() ;
fn3() ;