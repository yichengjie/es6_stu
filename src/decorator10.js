function dec(id){
  console.info('evaluated : ' ,id ) ;
  return function(target,property,descriptor){
     console.info('executed : ', id) ;
     //这里return 不return没有影响好像，不知道啥区别
     //return descriptor ;
  }
}

class Example{
  @dec(1)
  @dec(2)
  method(){}
}

var t = new Example() ;
t.method() ;