function nonenumberable(target,name,descriptor){
  descriptor.enumberable = false;
  return descriptor ;
}

class Person {
  @nonenumberable
  get  kidCount(){
    return this.children.length ;
  }
}

function log(target,name,descriptor){
  var oldValue = descriptor.value ;
  //console.info('oldValue : ' , oldValue) ;
  //这里的oldValue其实就是add方法
  descriptor.value = function(){
    console.log(`Calling "${name}" with `,arguments) ;
    return oldValue.apply(null,arguments)
  }
  return descriptor ;
}

class Math{
  @log
  add(a,b){
    return a + b; 
  }
}

const math = new Math() ;
const result = math.add(2,4) ;
console.info('result : ' + result) ;