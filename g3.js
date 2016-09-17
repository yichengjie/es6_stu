var nodeFetch = require('node-fetch') ;

function * gen(){
    var url = 'https://api.github.com/users/github' ;
    var result = yield nodeFetch(url) ;
    console.info(result.bio) ;
}

(function(){
    var g = gen() ;
    var result = g.next() ;
    result.value.then(function(data){
        return data.json() ;
    }).then(function(data){
        g.next(data) ;
    }) ;
})() ;

// (function(){
//     //https://api.github.com:3000/users/github
//     nodeFetch('https://api.github.com/users/github')
//     .then(function(res) {//
//         return res.json();
//     }).then(function(json) {
//         console.log(json);
//     });
// })() ;