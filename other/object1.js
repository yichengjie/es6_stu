'use strict'
//添加数据属性
function fn1(){
    var newLine = '<br/>' ;
    var obj = {newDataProperty:"x"} ;

    Object.defineProperty(obj,"newDataProperty",{
        value:101,
        writable:true,
        enumerable:true,
        configurable:true
    }) ;
    console.info("Property value " + obj.newDataProperty) ;
    obj.newDataProperty = 102 ;
    console.info("Property value " + obj.newDataProperty) ;
}


function fn2(){
    var obj = {"name":"ycj","addr":"henan"} ;
    var names = Object.getOwnPropertyNames(obj) ;
    for(let name of names){
        console.info(name +' - ' + obj[name]) ;
    }
}

function fn3(){
    //修改数据属性
    var obj = {newDataProperty:"123"} ;
    // Modify the writable attribute of the property.
    Object.defineProperty(obj, "newDataProperty", { writable: false });
    // List the property attributes by using a descriptor.
    // Get the descriptor with Object.getOwnPropertyDescriptor.
    var descriptor = Object.getOwnPropertyDescriptor(obj, "newDataProperty");
    for (var prop in descriptor) {
        console.info(prop + ': ' + descriptor[prop]);
        //confole.info(newLine);
    }
}

(function run(){
    fn1() ;
    console.info('-----------------------------------------') ;
    fn2() ;
    console.info('-----------------------------------------') ;
    fn3() ;
})() ;

