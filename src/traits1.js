import { traits } from 'traits-decorator';

class TFoo{
    foo(){
        console.info('foo') ;
    }
}

const TBar = {
    bar(){
        console.info('bar') ;
    },
    //这里会报错，说foo方法被定义两次
    //foo() { console.log('foo') }
}
@traits(TFoo,TBar)
class MyClass{

}

let obj = new MyClass() ;
obj.foo() ;
obj.bar() ;