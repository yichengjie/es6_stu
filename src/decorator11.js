let MyMixin = function(superclass){
  return  class extends superclass {
      foo(){
        console.info('foo form MyMixin ') ;
      }
  }
}

class MyBaseClass{
  
}

class MyClass extends MyMixin(MyBaseClass){

}

let c = new MyClass() ;
c.foo() ;