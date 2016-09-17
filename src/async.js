async function sleep(timeout) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('123') ;
        },timeout) ;
    }) ;
}

(async function(){
    console.info('Do some thing , ' + new Date()) ;
    let result = await sleep(3000) ;
    console.info('Do other thing  result is  : ' +result + '   --- > '+ new Date()) ;
})() ;