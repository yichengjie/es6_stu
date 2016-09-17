//var fs = require('fs') ;
//只能在node环境下执行，因为属于后端程序，所以不能使用webpack打包，否则会报fs找不到
var fs =require("fs");  
//import fs from 'fs';

var readFile = function(fileName){
    return new Promise(function(resolve,reject){
        fs.readFile(fileName,function(error,data){
            if(error){
                return reject(error) ;
            }
            resolve(data) ;
        }) ;
    }) ;
}

var gen = function *(){
    var f1 = yield readFile('./index.html') ;
    var f2 = yield readFile('./index.js') ;
    console.log(f1.toString()) ;
    console.info('--------------------------------------------------------') ; 
    console.log(f2.toString()) ;
}


function exe1(){
    var g = gen() ;
    g.next().value.then(function(data){
        g.next(data).value.then(function(data){
            g.next(data) ;
        },function(err){
            console.error(err) ;
        }); 
    },function(err){
        console.error(err) ;
    }) ;
}

(function(){
    exe1() ;

})() ;