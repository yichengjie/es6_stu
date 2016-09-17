function doGet(){
   return 3;
}


function * t1(){
  let result =  yield doGet() ;
  console.info('result : ' + result) ;
}

(function(){
    let g = t1() ;
    let data = g.next().value ;
    g.next(data) ;
})() ;