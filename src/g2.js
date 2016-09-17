function doGet(){
   return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('hello world') ;
        },2000) ;
    }) ;
}


function * t1(){
  let result =  yield doGet() ;
  console.info('result : ' + result) ;
}

(function(){
    let g = t1() ;
    g.next().value.then(function(data){
        g.next(data) ;
    }); 
})() ;