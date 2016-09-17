import publish from './publish.js' ;

class FooComponent{
  @publish("foo.some.message","component")
  someMethod(){
    return {
      my:"data"
    };
  }
  @publish("foo.some.other")
  anotherMethod(){

  }

}

let foo = new FooComponent() ;

foo.someMethod() ;
foo.anotherMethod() ;