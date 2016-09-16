//var fs = require('fs') ;
var fs =require("fs");  

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
    var f1 = yield readFile('./g1.js') ;
    var f2 = yield readFile('./g2.js') ;
    console.log(f1.toString()) ;
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