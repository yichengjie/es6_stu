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

module.exports = readFile ;