let Mixin1 = function (superclass){
  return class extends superclass{
    foo(){
      console.info('foo form Mixin1') ;
      if(super.foo) super.foo() ;
    }
  }
}

let Mixin2 = function (superclass){
  return class extends superclass{
    foo(){
      console.info('foo form Mixin2') ;
      if(super.foo) super.foo() ;
    }
  }
}

class S{
  foo(){
    console.info('foo from S') ;
  }
}

class C extends Mixin1(Mixin2(S)){
  foo(){
    console.info('foo from C') ;
    super.foo() ;
  }
}

new C().foo() ;
//foo from C
//foo form Mixin1
//foo form Mixin2
//foo from S


