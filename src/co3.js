var co = require('co') ;

function* somethingAsync(x) {
  // do something async
  console.info('x : ' + x) ;
  return y
}

co(function* () {
  var values = [n1, n2, n3];
  yield values.map(somethingAsync);
});

