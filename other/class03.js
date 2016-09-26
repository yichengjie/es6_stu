class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
}

var arr = new MyArray();
arr[0] = 12;
let len = arr.length // 1

arr.length = 0;
let obj = arr[0] // undefined

console.info('len : ' + len) ;
console.info('obj  : ',obj) ;